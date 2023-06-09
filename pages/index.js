import Image from 'next/image'
import { Red_Hat_Display } from 'next/font/google'
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

const RedHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

export default function Home({story }) {
  story = useStoryblokState(story);
  return (
      <main  className={RedHatDisplay.className}>
        <StoryblokComponent blok={story.content} />
      </main>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    resolve_links: "url",
    resolve_relations: ["featured-articles-slider.articles"],
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get('cdn/stories/config',sbParams);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
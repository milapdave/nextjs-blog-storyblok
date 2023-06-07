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
      <main className={RedHatDisplay.className}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <StoryblokComponent blok={story.content} />
        </div>
      </main>
  )
}

export async function getStaticProps({ params }) {
   let slug = params.slug ? params.slug.join("/") : "home";
  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    resolve_links: "url",
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

export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get("cdn/links/" ,{
      version: 'draft'
    });
   
    let paths = [];
    Object.keys(data.links).forEach((linkKey) => {
      if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
        return;
      }
   
      const slug = data.links[linkKey].slug;
      let splittedSlug = slug.split("/");
   
      paths.push({ params: { slug: splittedSlug } });
    });
   
    return {
      paths: paths,
      fallback: false,
    };
  }
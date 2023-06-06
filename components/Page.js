import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
    {blok?.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
 
export default Page;
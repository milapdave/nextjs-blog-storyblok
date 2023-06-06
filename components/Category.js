import { storyblokEditable } from "@storyblok/react";
 
const Category = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {console.log(blok,'blok cetegory')}
  </div>
);
 
export default Category;
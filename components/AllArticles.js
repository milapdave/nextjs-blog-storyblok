import Article from "./Article";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
 
import { useState, useEffect } from "react";
 
const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "draft", // or 'published'
        starts_with: 'articles/',
        is_startpage: false
      });
 
      setArticles((prev) => data.stories.map((article) => {
        article.content.slug = article.slug;
        return article;
      }));
    };
    getArticles();
}, []);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="py-6">
        <h2 className="text-3xl">{blok.title}</h2>
      </div>
      <div
        className="grid w-full grid-cols-1 gap-6 lg:grid-cols-4"
        {...storyblokEditable(blok)}
      >
        { articles[0] && articles.map((article) => (
          <Article article={article.content} key={article.uuid} />
        ))}
      </div>
    </div>
  );
};
export default AllArticles;
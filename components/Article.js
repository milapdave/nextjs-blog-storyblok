import { StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
 import Image from "next/image";
const ArticleTeaser = ({ article}) => {
return (
    <div className={`flex flex-col border border-opacity-50 shadow-sm`}>
        <Image width={300} height={300} className="object-cover object-center w-full h-60" src={article.image.filename} alt={article.headline} />
        <div className="flex flex-grow flex-col p-5">
            <h1 className="mb-4 text-xl font-semibold tracking-tighter leading-tight h-14">
                {article.headline}
            </h1>
            <div className="text-base leading-relaxed line-clamp-2 mb-4">
                {article.teaser}
            </div>
            <div className="mt-auto">
                <Link href={`/articles/${article.slug}`} className="inline-flex items-center mt-4 font-semibold border border-black px-5 py-2 hover:bg-black hover:text-white">
                    Read More »
                </Link>
            </div>
        </div>
    </div>
)
};
export default ArticleTeaser;
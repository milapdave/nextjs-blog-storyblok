import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
 
const ArticleTeaser = ({ article,currentSlide, index }) => {
return (
    <div className={`absolute left-0 right-0 h-full w-full transition-opacity ease-in duration-700 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <Image
            className="object-cover object-center w-full max-h-[700px]"
            src={article.image.filename}
            alt={article.headline}
            width={1920}
            height={1080}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 w-full max-w-2xl text-center text-white">
            {/* {article.categories.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))} */}
            <h1 className="mx-auto mb-8 text-5xl font-semibold leading-none tracking-tighter">
                {article.headline}
            </h1>
            <div className="mt-4">
                <Link href={`/articles/${article.slug}`} className="inline-flex items-center mt-4 font-semibold border border-white px-5 py-2">
                    Read More »
                </Link>
            </div>
        </div>
    </div>
)
};
export default ArticleTeaser;
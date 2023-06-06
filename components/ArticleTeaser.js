import Link from "next/link";
 
const ArticleTeaser = ({ article,currentSlide, index }) => {
return (
    <div className={`absolute left-0 right-0 h-full w-full transition-opacity ease-in duration-700 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <img
            className="object-cover object-center w-full max-h-[700px]"
            src={article.image.filename}
            alt="blog"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 w-full max-w-2xl text-center text-white">
            <h1 className="mx-auto mb-8 text-5xl font-semibold leading-none tracking-tighter">
                {article.headline}
            </h1>
            <div className="mx-auto text-base leading-relaxed  line-clamp-2">
                {article.teaser}
            </div>
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
import { render } from 'storyblok-rich-text-react-renderer';
 
const Article = ({ blok }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto flex items-center justify-center flex-col">
        <img
          className="w-full object-cover object-center rounded max-h-[600px]"
          alt={blok.image.alt}
          src={blok.image.filename}
        />
        <div className="text-center lg:w-2/4 w-full px-5 py-24">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blok.headline}
          </h1>
          <h1 className="title-font text-xl mb-8 font-medium text-gray-600">
            {blok.subheadline}
          </h1>
          <div className="mb-8 text-lg leading-relaxed text-justify">{render(blok.text)}</div>
        </div>
      </div>
    </section>
  );
};
export default Article;
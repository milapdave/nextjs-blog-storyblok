import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const Buttons = ({blok}) => (
    <Link className="inline-flex items-center rounded-full tracking-wider cursor-pointer transition-all duration-300 border border-white py-4 px-10 text-xl hover:text-black bg-opacity-10 backdrop-blur-lg bg-white text-white hover:bg-white " href={blok.link.cached_url} {...storyblokEditable(blok)}>
            {blok.label}
    </Link>
)
export default Buttons
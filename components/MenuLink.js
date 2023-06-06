import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}) => (
    <Link className="uppercase" href={blok.link.cached_url} {...storyblokEditable(blok)}>
            {blok.name}
    </Link>
)
export default MenuLink
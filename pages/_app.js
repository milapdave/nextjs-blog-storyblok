import '@/styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Layout from "../components/Layout";
import Config from "../components/Config";
import HeaderMenu from '../components/HeaderMenu';
import MenuLink from '../components/MenuLink';
import ArticleSlider from '../components/ArticleSlider';
import Buttons from '@/components/Buttons';
import Article from '../components/Article'
const components = {
  config: Config,
  layout: Layout,
  'featured-articles-slider': ArticleSlider,
  'article-page': Article,
  "header_menu": HeaderMenu,
  "menu_link": MenuLink,
  "button": Buttons,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "ZMrMI2VIGZH0TyNy00pUiwtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  )
}

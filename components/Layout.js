import Config from './Config'
 import Footer from './Footer';
const Layout = ({ children, story }) => ( 
  <>
      <Config blok={story} />
      {children}
      <Footer />
  </>
);
 
export default Layout;
import Config from './Config'
 
const Layout = ({ children, story }) => ( 
  <>
    <Config blok={story} />
      {children}
  </>
);
 
export default Layout;
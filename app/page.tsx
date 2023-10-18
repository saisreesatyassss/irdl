 
import Footer from '@/components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import Main from './Main/page'; 
import Products from './Products/pages';

export default function Home() {
  return (
    <div>
      <Main/>
      <Products/>
     {/* <section
  id="about"
  className="text-white h-screen bg-transparent text-center flex"
>
  <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
    About
  </h1>
</section>  */} 
      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{' '}
        </h1>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
      <Footer />
    </div>
  );
}
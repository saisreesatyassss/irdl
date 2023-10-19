 
import Footer from '@/components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import Main from './Main/page'; 
import Products from './Products/pages';
import Faq from '@/components/Faq/Faq';
import DetailsInputPage from '@/components/DetailsInputPage/DetailsInputPage';

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
       <DetailsInputPage/>
      <Faq/>
      <Footer />
    </div>
  );
}
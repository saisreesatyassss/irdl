 
import Footer from '@/components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import Main from './Main/page'; 
import Products from './Products/pages';
import Faq from '@/components/Faq/Faq';
import DetailsInputPage from '@/components/DetailsInputPage/DetailsInputPage';
import Banner from '@/components/Banner/Banner';
import SecurityCards from '@/app/SecurityCards/SecurityCards';
 
export default function Home() {
  return (
    <div>
      <Main/>       
      <Products/>
      <SecurityCards/>
      <Banner/>
      <DetailsInputPage/>
      <Faq/>
      <Footer />
      {/* <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{' '}
        </h1>
      </section> */}
       
    </div>
  );
}
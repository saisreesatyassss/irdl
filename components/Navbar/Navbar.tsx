// import NextLink from 'next/link';
// import Logo from './Logo';

// type CustomLinkButtomProps = {
//     href: string;
//     children: React.ReactNode;
// };

// const CustomLinkButtom = ({ href, children }: CustomLinkButtomProps) => {
//     return (
//         <NextLink href={href} className="bg-black text-sm px-5 text-white p-2 rounded-xl">
//              {children}
//         </NextLink> 
//     );
// };

// function Navbar() {
//   return (
//     // <nav className="bg-transparent p-4">
// <nav className="bg-white p-4 flex flex-wrap justify-between items-center">
//   <Logo /> 
//       <ul className="flex space-x-4  text-white">  
//         <li>
//           <CustomLinkButtom href="/">Home</CustomLinkButtom>
//         </li>
//         <li>
//           <CustomLinkButtom href="/products">Products</CustomLinkButtom>
//         </li>
//         <li>
//           <CustomLinkButtom href="/solutions">Solutions</CustomLinkButtom>
//         </li>
//         <li>
//           <CustomLinkButtom href="/customers">Customers</CustomLinkButtom>
//         </li>
//         <li>
//           <CustomLinkButtom href="/partners">Partners</CustomLinkButtom>
//         </li>
//         <li>
//           <CustomLinkButtom href="/about">About</CustomLinkButtom>
//         </li>
//         <li>
//           <CustomLinkButtom href="/demo">Watch Demo</CustomLinkButtom>
//         </li>
//         <li>
//           <CustomLinkButtom href="/contact">Contact Sales</CustomLinkButtom>
//         </li>
//       </ul>
//     </nav>
//   );
// }
'use client'
// export default Navbar;
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../Logo';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-white font-bold font-serif "> <Logo /></h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            > 
              <ul className="h-screen md:h-auto items-center justify-center md:flex gap-2">
                <li className="  bg-black  text-white py-1.5 px-3 text-center border-b-2 rounded-xl md:border-b-0   hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#Main" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="  bg-black  text-white py-1.5 px-3 text-center border-b-2 rounded-xl md:border-b-0   hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#Products" onClick={() => setNavbar(!navbar)}>
                    Products
                  </Link>
                </li>
                <li className="  bg-black  text-white py-1.5 px-3 text-center border-b-2 rounded-xl md:border-b-0   hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#Solutions" onClick={() => setNavbar(!navbar)}>
                    Solutions
                  </Link>
                </li>
                <li className="  bg-black  text-white py-1.5 px-3 text-center border-b-2 rounded-xl md:border-b-0   hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#Main" onClick={() => setNavbar(!navbar)}>
                    Resources
                  </Link>
                </li>
                <li className="  bg-black  text-white py-1.5 px-3 text-center border-b-2 rounded-xl md:border-b-0   hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#Main" onClick={() => setNavbar(!navbar)}>
                    Customers
                  </Link>
                </li>
                <li className="  bg-black  text-white py-1.5 px-3 text-center border-b-2 rounded-xl md:border-b-0   hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#Main" onClick={() => setNavbar(!navbar)}>
                    Partners
                  </Link>
                </li>
                <li className="bg-black   text-white  py-1.5 px-3 text-center  border-b-2 rounded-xl  md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent ">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>   
                </li>
                {/* <li className="bg-black   text-white py-1.5 px-3 text-center  border-b-2 rounded-xl  md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent ">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Watch Demo
                  </Link>
                </li>
                <li className="bg-black  text-white py-1.5 px-3 text-center  border-b-2 rounded-xl  md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Contact Sales
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
// import React from 'react';

// const products = [
//   { id: 1, name: 'Product 1', price: 19.99 },
//   { id: 2, name: 'Product 2', price: 29.99 },
//   { id: 3, name: 'Product 3', price: 39.99 },
// ];

// const Products: React.FC = () => {
//   return (
//     <div>
//       {/* <section id="Products" className="text-black h-screen bg-white flex">
//         <h1 className="m-auto font-waterfall text-7xl text-black font-bold">
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <div>
//               <strong>{product.name}</strong>
//             </div>
//             <div>${product.price.toFixed(2)}</div>
//           </li>
//         ))}
//       </ul>
//               </h1>
//       </section> */}

      
//     </div>
//   );
// };

// export default Products;

import React from 'react';
import Image from 'next/image';

const posts = [
    {
        title: "Password Safe",
        desc: "Gain visibility & control over privileged credentials and secrets",
        img: "/Product1.png",
        authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        authorName: "abc",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Privileged Remote Access",
        desc: "Manage & audit employee and vendor remote access",
        img: "/Product2.png",
        authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
        authorName: "Micheal",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Total PASM Solution",
        desc: "Get the best privileged credential & session management capabilities at an incredible value",
        img: "/Product3.png",
        authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
        authorName: "Luis",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Remote Support",
        desc: "Securely access & support any device or system in the world",
        img: "/Product4.png",
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Windows/Mac",
        desc: "Securely access & support any device or system in the world",
        img: "/Product5.png",
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Unix/Linux",
        desc: "Securely access & support any device or system in the world",
        img: "/Product6.png",
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Active Directory Bridge",
        desc: "Securely access & support any device or system in the world",
        img: "/Product7.png",
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Identity Security Insights",
        desc: "Get unparalleled visibility into identities, accounts, and privileged access — all in one interface",
        img: "/Product8.png",
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    }
];
const Products = () => {
  return (
    <section id="Products" className=" mt-12 mx-auto px-4  md:px-8  bg-white ">
      <div className="text-center">
        <h1 className="text-4xl text-black text-left font-bold py-4 ">
          Our Products
        </h1>
        <p className="mt-3 text-black text-left ">
Products that are favored by customers. Updated every hour.        </p>
      </div>
      <div className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {posts.map((item, key) => (
          <article
            className="max-w-md  mx-auto py-6 bg-gray-200 mt-4 shadow-lg border rounded-md duration-300 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110"
            key={key}
          >
            <div className="pt-3 ml-4 mr-2 mb-3 flex items-center ju ">
                <h3 className="text-xl  text-black font-semibold">{item.title}</h3>
                {/* <p className="text-gray-400 text-sm mt-1">{item.desc}</p> */}
              </div>
              
            <a href={item.href}>
              <Image
                src={item.img}
                loading="lazy"
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-48 px-2 rounded-2xl"
              />
              <div className="pt-3 ml-4 mr-2 mb-3">
                {/* <h3 className="text-xl text-gray-900">{item.title}</h3> */}
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;

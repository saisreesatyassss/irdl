
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

const data: CardData[] = [
  {
    title: "Gain Full Privilege Transparency​",
    description: "Our identity-first security platform discovers and protects users and machine identities, secrets, devices and access across all modern and traditional environments. Rooted in zero trust principles, we ensure unified control and visibility across your entire identity estate.",
    imageSrc: "security1.png",
  },
  {
    title: "Detect & Respond to Identity Threats​",
    description: "We’re not just modernizing privileged access management - we're redefining it with the power of advanced discovery, intelligence, and deep contextual analytics that reduce identity risk by proactively detecting and combatting attacks across your entire infrastructure.",
    imageSrc: "security2.png",
  },
  {
    title: "Secure Remote Access to Any Infrastructure​",
    description: "Our innovative remote access technology, complemented by identity-based privilege controls, delivers VPN-free secure access to any infrastructure. Request, grant, revoke, and audit access seamlessly. Leverage just-in-time access with unmatched granular controls to secure your entire organization.",
    imageSrc: "security3.png",
  },
  {
    title: "Protect Privileges at Scale​",
    description: "We stand alone with our all-encompassing, scalable privilege control solution. We uniquely integrate robust session management, identity-defined just-in-time access, flexible privilege elevation, and unified credential management, proactively fortifying your workforce identities.",
    imageSrc: "security4.png",
  },
];

// export default function SecurityCards() {
//   return (
//       <div id="SecurityCards" className="flex flex-col items-center justify-center h-screen bg-white px-16">
//       <div className="flex justify-between w-full mb-4">
//         <h1 className="text-4xl font-extrabold">We are leading the charge in innovating identity-first security</h1>
//         <h1 className="text- ">Go beyond preventative privilege management software with the power of real-time detection to stop identity threats.</h1>
//       </div>
//     <div className="flex space-x-4">
//       {data.map((item, index) => (
//         <ThreeDCard key={index} cardData={item} />
//       ))}
//     </div>
//     </div>
//   );
// }

// function ThreeDCard({ cardData }: { cardData: CardData }) {
//   return (
//     <div className="flex-auto  py-10 ">
//       <Card className="py-4 bg- -500 animate__animated animate__bounce ">
//         <CardBody className="overflow-visible flex justify-center items-center py-2">
//           <Image
//             alt="Card background"
//             className="object-cover rounded-xl"
//             src={cardData.imageSrc}
//             width={100}
//           />
//         </CardBody>

//         <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//           <p className="text-tiny uppercase font-bold">{cardData.title}</p>
//           <small className="text-default-500">{cardData.description}</small>
//           {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
//         </CardHeader>
//       </Card>
//     </div>
//   );
// }
export default function SecurityCards() {
  return (
    <div id="SecurityCards" className="flex flex-col py-10 items-center justify-center min-h-screen bg-white px-4 md:px-16">
      <div className="w-full md:w-2/3 text-center mb-4">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2">
          We are leading the charge in innovating identity-first security
        </h1>
        <p className="text-base md:text-lg">
          Go beyond preventative privilege management software with the power of real-time detection to stop identity threats.
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {data.map((item, index) => (
          <ThreeDCard key={index} cardData={item} />
        ))}
      </div>
    </div>
  );
}

function ThreeDCard({ cardData }: { cardData: CardData }) {
  return (
    <div className="flex-auto py-4 md:py-10">
      <Card className="py-4 bg-white hover:animate__animated hover:animate__bounce">
        <CardBody className="overflow-visible flex justify-center items-center py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={cardData.imageSrc}
            width={100}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{cardData.title}</p>
          <small className="text-default-500">{cardData.description}</small>
        </CardHeader>
      </Card>
    </div>
  );
}

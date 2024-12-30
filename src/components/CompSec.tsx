import Image from "next/image";

const CompSec = () => {
  const companies = [
    { src: "/companies/flash.svg", height: 100, width: 100, alt: "flash_logo" },
    { src: "/companies/invert.svg", height: 100, width: 100, alt: "invert_logo" },
    { src: "/companies/octopus.svg", height: 100, width: 100, alt: "octopus_logo" },
    { src: "/companies/proline.svg", height: 100, width: 100, alt: "proline_logo" },
    { src: "/companies/snowflake.svg", height: 100, width: 100, alt: "snowflake_logo" },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <p className="text-2xl text-white">
          More than 200+ companies trusted us worldwide.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-8 animate-scroll">
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={company.src}
                height={company.height}
                width={company.width}
                alt={company.alt}
                className="h-[100px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompSec;









// import Image from "next/image"

// const CompSec = () => {
//     const companies = [
//         {
//             src: "/companies/flash.svg",
//             height: 100,
//             width: 100,
//             alt: "flash_logo"
//         },
//         {
//             src: "/companies/invert.svg",
//             height: 100,
//             width: 100,
//             alt: "invert_logo"
//         },
//         {
//             src: "/companies/octopus.svg",
//             height: 100,
//             width: 100,
//             alt: "octopus_logo"
//         },
//         {
//             src: "/companies/proline.svg",
//             height: 100,
//             width: 100,
//             alt: "proline_logo"
//         },
//         {
//             src: "/companies/snowflake.svg",
//             height: 100,
//             width: 100,
//             alt: "snowflake_logo"
//         }
//     ]
//     return (
//         <div className=''>
//             <div className="text-center">
//                 <p className="text-2xl">More than 200+ companies trusted us worldwide.</p>
//             </div>
//             <div className="flex gap-8">
//                 {companies.map((company,index)=>(
//                     <div key={index}>
//                         <Image src={company.src} height={company.height} width={company.width} alt={company.alt} className="h-[100px] w-auto"/>
//                     </div>
//                 ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default CompSec
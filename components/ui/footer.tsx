// import Link from "next/link";
// import Logo from "./logo";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaWhatsapp } from "react-icons/fa";

// export default function Footer({ border = false }: { border?: boolean }) {
//   return (
//     <footer>
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         {/* Top area: Blocks */}
//         <div
//           className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
//         >
//           {/* 1st block */}
//           <div className="sm:col-span-12 lg:col-span-4">
//             <div className="space-y-2">
//               <div>
//                 <Logo />
//               </div>
//               <div className="text-sm text-gray-600">
//                 &copy; TriDevs Solution - All rights reserved.
//               </div>
//             </div>
//           </div>

//           {/* 5th block */}
//           <div className="sm:col-span-12 lg:col-span-4 lg:col-start-10 lg:col-end-13">
//             <h3 className="text-sm font-medium">Contact</h3>
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-center space-x-2">
//                 <HiOutlineMail className="flex-shrink-0 h-6 w-6 text-gray-600" />
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900 break-all"
//                   href="mailto:tridevs.solutions@gmail.com"
//                 >
//                   tridevs.solutions@gmail.com
//                 </Link>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <FaWhatsapp className="flex-shrink-0 h-6 w-6 text-gray-600" />
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="https://wa.me/2616222196"
//                 >
//                   +54 9 2616222196
//                 </Link>
//               </li>
//               {/* <li className="flex items-center space-x-2">
//                 <FaWhatsapp className="flex-shrink-0 h-6 w-6 text-gray-600" />
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="https://wa.me/2613065822"
//                 >
//                   +54 9 2613065822
//                 </Link>
//               </li> */}
//               {/* <li className="flex items-center space-x-2">
//                 <FaWhatsapp className="flex-shrink-0 h-6 w-6 text-gray-600" />
//                 <Link
//                   className="text-gray-600 transition hover:text-gray-900"
//                   href="https://wa.me/2616839002"
//                 >
//                   +54 9 2616839002
//                 </Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Big text */}
//       <div
//         className="relative -mt-16 h-60 w-full overflow-hidden hidden md:block"
//         aria-hidden="true"
//       >
//         <div
//           className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center font-bold leading-none text-[200px] lg:text-[348px]
//           before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['TRIDEVS']
//           after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['TRIDEVS'] after:[text-shadow:0_1px_0_white]"
//         ></div>
//         <div
//           className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
//           aria-hidden="true"
//         >
//           <div className="h-40 w-40 lg:h-56 lg:w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
//         </div>
//       </div>
//     </footer>
//   );
// }

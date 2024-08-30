import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationLayout } from "@/layouts/NavigationLayout";
import { PHProvider } from "./providers";
import dynamic from "next/dynamic";
import Head from "next/head";
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   preload: true,
//   variable: '--font-inter',
// })

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Keywords AI | #1 LLM Monitoring Platform for AI Startups",
  description:
    "Keywords AI: The leading LLM monitoring platform for AI startups. Easily monitor and improve your LLM applications with just 2 lines of code. Boost performance now.",
  icons: "https://www.keywordsai.co/logo.svg",
  openGraph: {
    type: "website",
    title: "Keywords AI - Build better AI products with complete observability",
    description:
      "Keywords AI is the best LLM monitoring platform for AI startups, you can easily monitor and improve your LLM appications with 2 lines of code.",
    url: "https://keywordsai.co",
    siteName: "Keywords AI",
    images: [
      {
        url: "https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@keywordsai",
    title: "Keywords AI",
    images: [
      "https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png",
    ],
  },
};

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={`${inter.variable} font-sans`}>
    <html lang="en" className={`${inter.variable}`}>
      <Head>
        <link rel="icon" href="/logo.svg" type="image/svg" sizes="26x26" />
      </Head>
      <PHProvider>
        <body>
          {/* <body> */}
          <div className="bg-gray-black h-full w-full">
            <NavigationLayout>{children}</NavigationLayout>
          </div>
        </body>
      </PHProvider>
    </html>
  );
}

// import { PostHogProvider } from 'posthog-js/react';
// import posthog from 'posthog-js';
// import { NavigationLayout } from  '@/layouts/NavigationLayout';
// import { useEffect, useState } from 'react';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     posthog.init("phc_rL8MrmFrie28wgxtDurKt9t1bwCzChaJQ7WYaj1F1gH", {
//       api_host: "https://app.posthog.com",
//     })

//     const script = document.createElement("script")
//     script.src = "https://cdn.octolane.com/tag.js?pk=cccfe315250db4ca1c81"
//     script.id = "octolane-script"
//     script.async = true
//     document.body.appendChild(script)

//     // Add mobile detection logic here
//     const handleResize = () => setIsMobile(window.innerWidth < 768)
//     window.addEventListener('resize', handleResize)
//     handleResize()

//     return () => {
//       document.body.removeChild(script)
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   return (
//     <html lang="en">
//       <body>
//         <PostHogProvider client={posthog}>
//             <div className="bg-gray-black h-full w-full">
//               <NavigationLayout mobile={isMobile}>
//                 {children}
//               </NavigationLayout>
//             </div>
//         </PostHogProvider>
//       </body>
//     </html>
//   )
// }

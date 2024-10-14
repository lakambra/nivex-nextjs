import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const font = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
      <Analytics />
      <Footer></Footer>
    </div>
  );
}

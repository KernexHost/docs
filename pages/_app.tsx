import "@/public/base.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-8 bg-radial-[at_0%_0%] from-[#121212] to-[#1b1b1b]">
      <Component {...pageProps} />
    </div>
  );
}

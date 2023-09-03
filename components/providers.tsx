import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import theme from "../styles/theme";
import NavbarLayout from "../layouts/NavbarLayout";
import Footer from "./Footer/Footer";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider resetCSS={true} theme={theme}>
          <NextNProgress height={4} />
          <NavbarLayout>{children}</NavbarLayout>
          <Footer />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}

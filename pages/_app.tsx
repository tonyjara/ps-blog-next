import "../global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../styles/theme";
import {
  Rubik,
  Bebas_Neue,
  Montserrat,
  League_Spartan,
  Inter,
} from "next/font/google";
import NavbarLayout from "../layouts/NavbarLayout";
import Footer from "../components/Footer/Footer";
import MetaTagsComponent from "../components/Meta/MetaTagsComponent";

const rubik = Rubik({ subsets: ["latin"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"] });
const spartan = League_Spartan({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaTagsComponent />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
            --font-montserrat: ${montserrat.style.fontFamily};
            --font-bebas: ${bebas.style.fontFamily};
            --font-spartan: ${spartan.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <NavbarLayout>
          <Component {...pageProps} />
        </NavbarLayout>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;

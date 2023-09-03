import React, { ReactNode } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import DarkModeButton from "../components/Buttons/DarkModeButton";
import LOGO from "../public/blog-logo.png";
import Link from "next/link";
import Image from "next/image";

const NavbarLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Box id="top" width="100%" zIndex={3}>
        <Flex
          minH={"60px"}
          px={{ base: 2, sm: 4 }}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Link style={{ cursor: "pointer" }} href={"/"}>
            <Flex gap={"5px"} alignItems={"center"}>
              <Image alt="Logo" src={LOGO} width={35} height={35} />

              <Text color={"#46AC42"} fontSize={"4xl"} fontWeight={"bold"}>
                PS
              </Text>
            </Flex>
          </Link>
          <div>
            <DarkModeButton />
          </div>
        </Flex>
      </Box>
      <Flex
        justifyContent={{ base: "normal", sm: "center" }}
        px={2}
        maxW={"1400"}
        minH={"100vh"}
      >
        {children}
      </Flex>
    </div>
  );
};

export default NavbarLayout;

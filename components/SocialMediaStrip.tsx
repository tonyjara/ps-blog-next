import { Stack, Icon, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
import { socialMediaLinks } from "../lib/constants";
import Link from "next/link";
import { leafColors } from "../styles/theme";

const SocialMediaStrip = () => {
  const accentColor = useColorModeValue(
    leafColors.accentLight,
    leafColors.accentDark
  );
  return (
    <Stack
      mt={{ base: "20px", md: "0px" }}
      order={{ base: 3, md: 2 }}
      direction={"row"}
      spacing={8}
    >
      {/* <Link target="_blank" href={socialMediaLinks.linkedin}> */}
      {/*   <Icon */}
      {/*     color={accentColor} */}
      {/*     borderEndRadius={"20%"} */}
      {/*     fontSize={{ base: "3xl", md: "3xl" }} */}
      {/*     as={FaLinkedin} */}
      {/*   /> */}
      {/* </Link> */}

      <Link target="_blank" href={socialMediaLinks.instagram}>
        <Icon
          color={accentColor}
          className="instagram"
          fontSize={{ base: "3xl", md: "3xl" }}
          as={FaInstagram}
        />
      </Link>
      <Link target="_blank" href={socialMediaLinks.twitter}>
        <Icon
          color={accentColor}
          fontSize={{ base: "3xl", md: "3xl" }}
          as={FaTwitter}
        />
      </Link>

      <Link target="_blank" href={socialMediaLinks.youtube}>
        <Icon
          color={accentColor}
          fontSize={{ base: "3xl", md: "3xl" }}
          as={FaYoutube}
        />
      </Link>
    </Stack>
  );
};

export default SocialMediaStrip;

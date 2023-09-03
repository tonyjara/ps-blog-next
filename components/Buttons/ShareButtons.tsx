import { HStack, Tooltip, Icon, useToast, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
import { FiLink } from "react-icons/fi";
import {
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";
import { IPost } from "../../interfaces/post";
import { WEB_URL } from "../../lib/constants";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareButtons = (props: IPost) => {
  const { title } = props;
  const pathname = usePathname();
  const toast = useToast();

  const WEBPAGE_URL = `${WEB_URL}${pathname}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(WEBPAGE_URL);
    toast({
      title: "Link on clipboard!",
      status: "success",
      isClosable: true,
      duration: 2000,
      position: "top",
    });
  };
  return (
    <HStack justify={"center"} alignItems={"center"} py={5} spacing={5}>
      <Text fontSize={"xl"}>Share: </Text>
      <Tooltip hasArrow label="Share on whatsapp." bg="gray.300" color="black">
        <WhatsappShareButton url={WEBPAGE_URL} title={title} separator=":: ">
          {/* <WhatsappIcon /> */}
          <FaWhatsapp fontSize={"30px"} />
        </WhatsappShareButton>
      </Tooltip>
      <Tooltip hasArrow label="Share on twitter." bg="gray.300" color="black">
        <TwitterShareButton url={WEBPAGE_URL} title={title}>
          {/* <TwitterIcon round size={25} /> */}
          <FaTwitter fontSize={"30px"} />
        </TwitterShareButton>
      </Tooltip>
      <Tooltip hasArrow label="Share on Facebook." bg="gray.300" color="black">
        <FacebookShareButton url={WEBPAGE_URL} title={title}>
          {/* <FacebookIcon round size={25} /> */}
          <FaFacebook fontSize={"30px"} />
        </FacebookShareButton>
      </Tooltip>
      <Tooltip hasArrow label="Copy link." bg="gray.300" color="black">
        <div style={{ marginTop: -1 }}>
          <Icon
            onClick={handleCopyLink}
            cursor={"pointer"}
            boxSize={"30px"}
            as={FiLink}
          />
        </div>
      </Tooltip>
    </HStack>
  );
};

export default ShareButtons;

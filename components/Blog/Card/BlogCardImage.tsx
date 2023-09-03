import {
  Flex,
  AspectRatio,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../interfaces/post";

const BlogCardImage = (post: IPost) => {
  return (
    <Box
      display="flex"
      flex="1"
      marginRight="3"
      position="relative"
      alignItems="center"
    >
      <Box
        width={{ base: "100%", sm: "85%" }}
        zIndex="2"
        marginLeft={{ base: "0", sm: "5%" }}
        marginTop="5%"
      >
        <Link href={`/${post.slug}`}>
          <Flex justifyContent={"center"} cursor={"pointer"}>
            <AspectRatio
              ratio={16 / 9}
              maxW={{ base: "200px", md: "400px" }}
              minW={{ base: 300, md: 400 }}
            >
              <Image
                borderRadius="lg"
                src={post.coverImage}
                alt={post.slug}
                objectFit="contain"
              />
            </AspectRatio>
          </Flex>
        </Link>
      </Box>
      <Box zIndex="1" width="100%" position="absolute" height="100%">
        <Box
          bgGradient={useColorModeValue(
            "radial(orange.600 1px, transparent 1px)",
            "radial(orange.300 1px, transparent 1px)"
          )}
          backgroundSize="20px 20px"
          opacity="0.4"
          height="100%"
        />
      </Box>
    </Box>
  );
};

export default BlogCardImage;

import React from "react";
import BlogListComponent from "../components/Blog/blog-list-card";
import { convertToDate } from "../lib/dateHelpers";
import { GetStaticProps } from "next";
import { IPost } from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import MetaTagsComponent from "../components/Meta/MetaTagsComponent";
import {
  Link as ChakraLink,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { leafColors } from "../styles/theme";
import Link from "next/link";

const BlogHome = (props: { allPosts: IPost[] }) => {
  const allPosts = props.allPosts.sort(
    //@ts-ignore
    (a, b) => convertToDate(b.date) - convertToDate(a.date)
  );

  const colorMode = useColorMode();
  const color =
    colorMode.colorMode === "dark"
      ? leafColors.accentDark
      : leafColors.accentLight;
  return (
    <Box w="100%" mt={"10px"} px="10px" maxW={"1000px"}>
      <MetaTagsComponent
        title="Blogs list"
        description="Podcast solutions is a platform to host and manage podcasts. We offer audio transcription, AI content generation and much more."
      />
      <Flex gap={"10px"} alignItems={"center"} flexDir={"column"}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          color={color}
          fontWeight={"bold"}
        >
          The Podcast Solution&apos;s Blog
        </Heading>
        <Text fontSize={{ base: "md", md: "2xl" }}>
          Take your podcast to the next level with{" "}
          <ChakraLink
            as={Link}
            href="https://podcastsolutions.org"
            target="_blank"
            rel="noreferrer"
            fontWeight={"bold"}
            textDecoration={"underline"}
          >
            Podcast Solutions
          </ChakraLink>
          !
        </Text>
      </Flex>
      {allPosts.map((post) => (
        <div key={post.slug}>
          <BlogListComponent post={post} />
        </div>
      ))}
    </Box>
  );
};

export default BlogHome;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};

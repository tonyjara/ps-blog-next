import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { IPost } from "../../interfaces/post";
import BlogCardImage from "./Card/BlogCardImage";
import BlogCardTitle from "./Card/BlogCardTitle";

const BlogListComponent: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Box
      py={{ base: 2, md: 10 }}
      marginTop={{ base: 0, sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
      gap={"20px"}
    >
      <BlogCardImage {...post} />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
        gap={"20px"}
      >
        {/* <BlogCardTags tags={post.tags} /> */}
        <BlogCardTitle {...post} />

        <div
          style={{ fontStyle: "italic" }}
          dangerouslySetInnerHTML={{
            __html: post.excerpt.substring(0, 420),
          }}
        />

        <Link href={`/${post.slug}`}>
          <Button
            marginLeft={"-20px"}
            variant={"ghost"}
            maxW={150}
            marginTop={5}
            marginBottom={5}
          >
            Read more{" "}
          </Button>
        </Link>
        {/* <BlogCardAuthor {...post} /> */}
      </Box>
    </Box>
  );
};

export default BlogListComponent;

import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../interfaces/post";

const BlogCardTitle = (post: IPost) => {
  return (
    <Heading fontSize={{ base: "xl", md: "3xl" }}>
      <Link href={`/${post.slug}`}>{post.title}</Link>
    </Heading>
  );
};

export default BlogCardTitle;

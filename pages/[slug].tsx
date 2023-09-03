import BlogBody from "../components/Blog/blog-body";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostSlugs } from "../lib/api";
import MetaTagsComponent from "../components/Meta/MetaTagsComponent";
import { IPost } from "../interfaces/post";
import { Text, Box, Heading, Image } from "@chakra-ui/react";
/* import Image from "next/image"; */
import ShareButtons from "../components/Buttons/ShareButtons";
import { parse } from "date-fns";
import LatestBlogs from "../components/Swiper/LatestBlogs";
import BlogBreadCrumbs from "../components/Blog/BlogBreadCrumbs";

export default function Post(props: { post: IPost; allPosts: IPost[] }) {
  const { post } = props;
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const parsedDate = parse(post.date, "dd/MM/yyyy", new Date());

  const allPostsButThisOne = props.allPosts.filter((x) => x.slug !== post.slug);

  return (
    <Box
      maxW={"1000px"}
      /* display={"flex"} */
      /* flexDirection={"column"} */
      /* alignItems={"center"} */
      mb={"20px"}
    >
      <MetaTagsComponent
        title={post.title}
        description={post.excerpt}
        imageSrc={post.coverImage}
        date={parsedDate}
      />
      <Box mb={"20px"}>
        <BlogBreadCrumbs blogTitle={post.date} />

        <Box w="100%" p="10px" display={"flex"} justifyContent={"center"}>
          <Image
            src={post.coverImage}
            /* maxW={400} */
            objectFit={"contain"}
            maxH={400}
            borderRadius={"md"}
            alt={`Cover Image for ${post.title}`}
            /* priority */
          />
        </Box>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "5xl" }}
          my="20px"
        >
          {post.title}
        </Heading>
        <Text mt={2} textAlign={"center"} color="GrayText">
          {post.date}
        </Text>
        <ShareButtons {...post} />
      </Box>

      <BlogBody content={post.content} />
      <LatestBlogs title="Other blogs" allPosts={allPostsButThisOne} />
    </Box>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((x) => {
      return {
        params: {
          slug: x.replace(".md", ""),
        },
      };
    }),
    fallback: false,
  };
}

import Link from "next/link";

import Image from "next/image";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { IPost } from "../../interfaces/post";

const BlogSwipeCard: FC<{ post: IPost }> = ({ post }) => {
  const { title, excerpt, date, coverImage } = post;

  return (
    <Link href={`/${post.slug}`} key={post.slug}>
      <Box maxW={"445px"}>
        <Box
          h={"210px"}
          bg={"gray.100"}
          mb={6}
          borderTopRadius={"md"}
          pos={"relative"}
          rounded={"lg"}
        >
          <Image
            src={coverImage}
            alt="Blog card"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Stack>
          <Heading fontSize={"2xl"}>{title}</Heading>

          <Text color={"gray.500"}>{excerpt}</Text>
          <Text color={"gray.500"}>{date}</Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default BlogSwipeCard;

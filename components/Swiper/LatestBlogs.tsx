import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { IPost } from "../../interfaces/post";
import BlogSwipeCard from "./BlogSwipeCard";
import CardSwiper from "./CardSwiper";

const LatestBlogs = ({
  allPosts,
  title,
}: {
  allPosts: IPost[];
  title?: string;
}) => {
  return (
    <Box w="100%" alignItems="center" display={"flex"} flexDir="column">
      <Text
        fontWeight={"bold"}
        textAlign={"center"}
        pt={20}
        fontSize="4xl"
        alignSelf={"center"}
      >
        {title ? title : "Latest Blogs"}
      </Text>
      <Text mb="20px" fontStyle="italic">
        Swipe me!
      </Text>
      <CardSwiper>
        {allPosts.map((post) => {
          return (
            <SwiperSlide key={post.slug}>
              <BlogSwipeCard post={post} />
            </SwiperSlide>
          );
        })}
      </CardSwiper>
    </Box>
  );
};

export default LatestBlogs;

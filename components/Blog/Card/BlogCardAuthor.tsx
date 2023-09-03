import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IPost } from "../../../interfaces/post";

const BlogCardAuthor: React.FC<IPost> = ({ author, date }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={author.picture}
        alt={`Avatar of ${author.name}`}
        style={{ objectFit: "cover" }}
      />
      <Text fontWeight="medium">{author.name}</Text>
      {/* <Text>—</Text> */}
      <Text>{date}</Text>
    </HStack>
  );
};

export default BlogCardAuthor;

import { AspectRatio, Box, Image, Text } from "@chakra-ui/react";
import { IPost } from "../../interfaces/post";

const BlogCoverImage = ({ title, coverImage, slug, date }: IPost) => {
  const image = (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image
          rounded={8}
          src={coverImage}
          objectFit="cover"
          alt={`Cover Image for ${title}`}
        />
      </AspectRatio>
      {/* <Text mt={2} textAlign={"center"} fontStyle={"italic"} color="GrayText"> */}
      {/*   {birbName} */}
      {/* </Text> */}
      <Text mt={2} textAlign={"center"} color="GrayText">
        {date}
      </Text>
    </Box>
  );
  return (
    <div className="sm:mx-0">
      {/* {slug ? ( */}
      {/*   <a */}
      {/*     target={"_blank"} */}
      {/*     href={birbLink} */}
      {/*     aria-label={title} */}
      {/*     rel="noreferrer" */}
      {/*   > */}
      {/*     {image} */}
      {/*   </a> */}
      {/* ) : ( */}
      {image}
    </div>
  );
};

export default BlogCoverImage;

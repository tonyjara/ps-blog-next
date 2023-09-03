import { AspectRatio, Box, Image } from "@chakra-ui/react";
import React from "react";

const BirbPic = ({
    title,
    coverImage,
}: {
    title: string;
    coverImage: string;
}) => {
    return (
        <Box>
            <AspectRatio maxH={400} maxW={400} ratio={3 / 2}>
                <Image alt={title} src={coverImage} />
            </AspectRatio>
        </Box>
    );
};

export default BirbPic;

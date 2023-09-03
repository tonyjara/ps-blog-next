import {
  Box,
  Link,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import SocialMediaStrip from "../SocialMediaStrip";
import { leafColors } from "../../styles/theme";

export default function Footer() {
  const accentColor = useColorModeValue(
    leafColors.accentLight,
    leafColors.accentDark
  );
  return (
    <Box
      px={{ base: 5, md: 10 }}
      as={Stack}
      width="100%"
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <SocialMediaStrip />
      <Button
        as={Link}
        order={{ base: 1, md: 2 }}
        href="#top"
        fontSize={"xl"}
        variant={"ghost"}
      >
        Back to top
      </Button>
      <Text fontSize={"lg"} color={accentColor} order={{ base: 2, md: 3 }}>
        <span>&copy; </span> {new Date().getFullYear()} Podcast Solutions{" "}
      </Text>
    </Box>
  );
}

import {
  Box,
  Text,
  Flex,
  Stack,
  useColorModeValue,
  useColorMode,
  Icon,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";

interface FeatureProps {
  title: string;
  text: string;
  logoUrl: string;
  tech: string;
  href: string;
  repoLink?: string;
  docuLink?: string;
  footer?: string;
}

const ProjectCard = ({
  title,
  text,
  logoUrl,
  tech,
  href,
  repoLink,
  docuLink,
  footer,
}: FeatureProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
    >
      <Stack p={6}>
        <Flex
          justifyContent={"space-between"}
          as={"a"}
          href={href}
          target="_blank"
          /* w={16} */
          flexDir={"row"}
          alignItems={"center"}
          h={16}
        >
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {title}
          </Text>

          <Image
            height={40}
            width={40}
            style={{ objectFit: "contain" }}
            src={logoUrl}
            alt={`Logo for ${title}`}
          />
        </Flex>
        <Text>{text}</Text>
        <Text fontWeight={"bold"} color={"gray.600"}>
          Tech stack:
        </Text>
        <Text>{tech}</Text>
        <Text>{footer}</Text>
      </Stack>
      <HStack mb="20px" ml="20px" spacing={6}>
        {repoLink && (
          <Link
            color={isDark ? "#FFFF" : "#000"}
            target="_blank"
            href={repoLink}
          >
            <Icon fontSize={{ base: "3xl", md: "4xl" }} as={FaGithub} />
          </Link>
        )}

        {docuLink && (
          <Link
            color={isDark ? "#FFFF" : "#000"}
            target="_blank"
            href={docuLink}
          >
            <Icon fontSize={{ base: "3xl", md: "4xl" }} as={CgLoadbarDoc} />
          </Link>
        )}
      </HStack>
    </Box>
  );
};

export default ProjectCard;

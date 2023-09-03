import React from "react";
import { IPost } from "../../interfaces/post";
import Select from "react-select";
/* import { capitalize } from "lodash"; */
import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const BlogSearchbar = ({ posts }: { posts: IPost[] }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  /* const options = posts.map((x) => { */
  /*   return { value: x.slug, label: capitalize(x.slug.replaceAll("-", " ")) }; */
  /* }); */

  const handleNavigate = (e: { value: string; label: string } | null) => {
    e && router.push(`/blog/${e.value}`);
  };
  return (
    <Box pt={4} alignSelf={"center"} minW={"300px"}>
      <Select
        /* options={options} */
        placeholder="Search blog posts"
        styles={{
          menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            backgroundColor: isDark ? "black" : "white",
          }),
        }}
        theme={(theme) =>
          isDark
            ? {
                ...theme,

                colors: {
                  ...theme.colors,
                  primary25: "#ade3b8",
                  primary: "#16161D",
                },
              }
            : { ...theme }
        }
        onChange={handleNavigate}
        noOptionsMessage={() => "No blogs found."}
      />
    </Box>
  );
};

export default BlogSearchbar;

import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
/* const breakpoints = { */
/*   sm: "30em", // 480px */
/*   md: "48em", // 768px */
/*   lg: "62em", // 992px */
/*   xl: "80em", // 1280px */
/*   "2xl": "96em", // 1536px */
/* }; */
export const leafColors = {
  accentDark: "#B3D485",
  accentLight: "#46AC42",
};

const theme = extendTheme({
  initialColorMode: "light",
  fonts: {
    heading: "var(--font-inter)",
    /* heading: "var(--font-spartan)", */
    /* heading: "var(--font-montserrat)", */
    /* heading: "var(--font-bebas)", */
    body: "var(--font-montserrat)",
  },
  colors: {
    leafColors,
  },
  components: {
    Heading: {},
    Button: {
      variants: {
        ghost: (props: StyleFunctionProps) => {
          const accentColor =
            props.colorMode === "dark"
              ? leafColors.accentDark
              : leafColors.accentLight;
          return {
            color: accentColor,
            _hover: {
              backgroundColor: "transparent",
              _before: {
                transform: "scaleX(1)",
                backgroundColor: accentColor,
              },
            },
            _before: {
              content: "''",
              position: "absolute",
              display: "block",
              backgroundColor: accentColor,
              width: "100%",
              height: "2px",
              bottom: 0,
              left: 0,
              transform: "scaleX(0)",
              transition: "transform 0.15s ease-in-out",
            },
          };
        },
      },
    },
  },
});

export default theme;

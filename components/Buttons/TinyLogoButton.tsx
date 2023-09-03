import Link from "next/link";
import React from "react";
import Image from "next/image";
import LOGO from "../../public/blog-logo.png";

const TinyLogoButton = () => {
  /* const { colorMode } = useColorMode(); */
  // Could not figure out how to get the SVG
  /* const TjSvg = createIcon({ */
  /*   displayName: "TjSvg", */
  /*   viewBox: "0 0 1057.97 1057.97", */
  /*   d: "M528.98 0C683.15 0 821.9 65.97 918.59 171.21L837.17 635c-8.1 47.12-23.56 83.93-46.38 110.44-22.82 26.5-50.06 39.76-81.72 39.76h-85.03c-25.03 0-44.73-9.2-59.08-27.61-14.36-18.41-21.53-43.44-21.53-75.1 0-7.36 1.47-21.35 4.42-41.97H397.66c-3.68 23.56-5.52 43.81-5.52 60.74 0 67 20.25 120.19 60.74 159.58 40.49 39.39 94.97 59.08 163.44 59.08h91.66c72.89 0 134-24.48 183.32-73.44 49.33-48.96 81.72-117.25 97.18-204.86l46.75-266.47c14.78 48.68 22.75 100.32 22.75 153.83 0 292.15-236.83 528.98-528.98 528.98-141.93 0-270.79-55.9-365.79-146.88h102.88l112.64-640.52H623.9l23.19-132.52H172.66C266.67 52.29 391.73 0 529 0zM121.54 866.35C45.64 774.78 0 657.22 0 528.99c0-93.86 24.48-182 67.35-258.42h158.96L121.53 866.35z", */
  /* }); */
  /* const isDark = colorMode === "dark"; */
  return (
    <Link style={{ cursor: "pointer" }} href={"/"}>
      {/* <TjSvg */}
      {/*   color={isDark ? "leafColors.accentDark" : "leafColors.accentLight"} */}
      {/*   boxSize={7} */}
      {/* /> */}

      <Image alt="Logo" src={LOGO} width={35} height={35} />
    </Link>
  );
};

export default TinyLogoButton;

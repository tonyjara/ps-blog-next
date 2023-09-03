import Image from "next/image";
import Link from "next/link";
import React from "react";
import LOGO from "../public/blog-logo.png";

const LogoButton = () => {
  return (
    <Link href={"/"}>
      <div style={{ cursor: "pointer" }}>
        <Image alt="Logo" src={LOGO} width={35} height={35} />
      </div>
    </Link>
  );
};

export default LogoButton;

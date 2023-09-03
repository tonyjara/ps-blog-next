import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const BlogBreadCrumbs = ({ blogTitle }: { blogTitle?: string }) => {
  return (
    <Breadcrumb
      py={2}
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">
          Blog{" "}
        </BreadcrumbLink>
      </BreadcrumbItem>

      {blogTitle && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{blogTitle}</BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default BlogBreadCrumbs;

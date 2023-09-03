import { useColorMode } from "@chakra-ui/react";

type Props = {
  content: string;
};

const BlogBody = ({ content }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={
        colorMode === "light"
          ? "prose whitespace-normal prose-strong:font-extrabold prose-p:text-lg prose-a:text-blue-600 max-w-none p-1"
          : "prose prose-strong:text-green-500 prose-strong:font-extrabold prose-p:text-white prose-p:text-lg  text-slate-400 prose-headings:text-slate-300 prose-a:text-blue-300 max-w-none p-1"
      }
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogBody;

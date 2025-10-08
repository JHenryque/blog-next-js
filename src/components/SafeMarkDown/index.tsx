import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkDownProps = {
  markdown: string;
};

export default function SafeMarkDown({ markdown }: SafeMarkDownProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
      {markdown}
    </ReactMarkdown>
  );
}

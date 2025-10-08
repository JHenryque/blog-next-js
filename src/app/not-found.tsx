import ErrorMessage from "@/components/ErrorMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada! :(",
};
export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTile="Página não encontrada"
      contentTitle="404"
      content="A página não foi encontrada ou não existe"
    />
  );
}

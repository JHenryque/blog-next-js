"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    //console.error(error);
  }, [error]);
  return (
    <ErrorMessage
      pageTile="Internal Server Error"
      contentTitle="501"
      content="Ocorreu um erro interno no servidor. tente novamente mais tarde"
    />
  );
}

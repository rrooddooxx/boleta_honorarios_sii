import { useState } from "react";

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("error copying to clipboard: ", error);
      setIsCopied(false);
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return { isCopied, copy };
};

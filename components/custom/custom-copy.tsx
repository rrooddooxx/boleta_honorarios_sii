import { ClipboardCheckIcon, ClipboardCopy } from "lucide-react";
import { SyntheticEvent } from "react";
import { useCopy } from "../../hooks/useCopy";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SuccessTooltip = ({
  children,
  isSuccess,
}: {
  children: JSX.Element;
  isSuccess: boolean;
}) => (
  <TooltipProvider>
    <Tooltip open={isSuccess} delayDuration={0}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{isSuccess && <p>Copiado!</p>}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const CustomCopy = ({ inputText }: { inputText: string }) => {
  const { isCopied, copy } = useCopy();

  const copyClickHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    await copy(inputText);
  };

  return (
    <div className="absolute right-2 top-2">
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger onClick={copyClickHandler}>
            <SuccessTooltip isSuccess={isCopied}>
              {isCopied ? <ClipboardCheckIcon /> : <ClipboardCopy />}
            </SuccessTooltip>
          </TooltipTrigger>
          {!isCopied && (
            <TooltipContent>
              <p>Copiar al portapapeles</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

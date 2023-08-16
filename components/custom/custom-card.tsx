"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InputCopy } from "../ui/input-copy";

export type CustomCardProps = {
  title: string;
  subtitle: string;
  inputLabels: {
    inputLabel1: string;
    inputLabel2: string;
    inputLabel3: string;
  };
  buttons: boolean;
  buttonLabels?: {
    buttonLabel1?: string;
    buttonLabel2?: string;
  };
  values: {
    montoBoleta: string;
    montoPago: string;
    montoRetencion: string;
  };
};

export const CustomCard = ({
  buttonLabels,
  buttons,
  inputLabels,
  subtitle,
  title,
  values,
}: CustomCardProps) => {
  const { inputLabel1, inputLabel2, inputLabel3 } = inputLabels;
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{inputLabel1}</Label>
              <InputCopy
                id="name"
                placeholder={inputLabel1}
                value={values.montoBoleta}
                readOnly
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{inputLabel2}</Label>
              <InputCopy
                id="name"
                placeholder={inputLabel2}
                value={values.montoPago}
                readOnly
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{inputLabel3}</Label>
              <InputCopy
                id="name"
                placeholder={inputLabel3}
                value={values.montoRetencion}
                readOnly
              />
            </div>
          </div>
        </form>
      </CardContent>
      {buttons && (
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            {(buttons && buttonLabels?.buttonLabel1) || ""}
          </Button>
          <Button>{(buttons && buttonLabels?.buttonLabel2) || ""}</Button>
        </CardFooter>
      )}
    </Card>
  );
};

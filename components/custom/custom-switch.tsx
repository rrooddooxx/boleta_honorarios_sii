import { Dispatch, SetStateAction } from "react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export const CustomSwitch = ({
  label,
  setChecked,
  checkedVal,
}: {
  label: string;
  setChecked: Dispatch<SetStateAction<boolean>>;
  checkedVal: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="custom-switch"
        checked={checkedVal}
        onCheckedChange={(e) => setChecked(e)}
      />
      <Label htmlFor="custom-switch">{label ?? ""}</Label>
    </div>
  );
};

import { AddOn } from "./Add-on/AddOn";
import { addonData, PageController } from "../../function/Functions";
import "../../App.css";
import { useAppSelector } from "../../reduxState/types";
import {
  setCheckedStates,
  setSelectedAddons
} from "../../reduxState/stateSlice";

function AddOns() {
  const yearly = useAppSelector(state => state.pageState.yearly);
  const controller = PageController();
  const checkedStates = useAppSelector(state => state.pageState.checkedStates);

  const handleCheckboxChange = (
    index: number,
    addon: string | number | [] | {} | any
  ) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    controller(setCheckedStates(newCheckedStates));
    const selectedAddon = {
      name: addon.name,
      plan: yearly ? addon.yrAddon : addon.moAddon
    };

    if (newCheckedStates[index]) {
      controller(setSelectedAddons(selectedAddon));
    }
  };

  return (
    <div className="slide-in">
      {addonData().map((addon, index) => {
        return (
          <AddOn
            key={addon.name}
            name={addon.name}
            description={addon.description}
            plan={yearly ? addon.yrAddon : addon.moAddon}
            checked={checkedStates[index]}
            onChange={() => handleCheckboxChange(index, addon)}
          />
        );
      })}
    </div>
  );
}

export default AddOns;

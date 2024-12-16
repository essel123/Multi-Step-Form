import { AddOn } from "./Add-on/AddOn";
import { addonData, usePersistedState } from "../../function/Functions";
import "../../App.css";

function AddOns() {
  const plantype = localStorage.getItem("plan") === "true";
  const [checkedStates, setCheckedStates] = usePersistedState("checkedStates", [
    false,
    false,
    false
  ]);
  const handleCheckboxChange = (index: number, addon: any) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
    const selectedAddon = {
      name: addon.name,
      plan: plantype ? addon.yrAddon : addon.moAddon
    };

    let selectedAddons = JSON.parse(
      localStorage.getItem("selectedAddons") || "[]"
    );

    if (newCheckedStates[index]) {
      selectedAddons.push(selectedAddon);
    } else {
      selectedAddons = selectedAddons.filter(
        (item: any) => item.name !== addon.name
      );
    }

    localStorage.setItem("selectedAddons", JSON.stringify(selectedAddons));
  };

  return (
    <div className="slide-in">
      {addonData().map((addon, index) => {
        return (
          <AddOn
            key={addon.name}
            name={addon.name}
            description={addon.description}
            plan={plantype ? addon.yrAddon : addon.moAddon}
            checked={checkedStates[index]}
            onChange={() => handleCheckboxChange(index, addon)}
          />
        );
      })}
    </div>
  );
}

export default AddOns;

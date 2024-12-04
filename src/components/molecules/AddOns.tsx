import { AddOn } from "./Add-on/AddOn";

import '../../App.css'

function AddOns() {
  return (
    <div className="slide-in">
      <AddOn
        description="Access to multiplayer games"
        name="Online service"
        plan="1/mo"
      />
      <AddOn
        description="Extra 1TB of cloud save"
        name="Larger storage"
        plan="2/mo"
      />
      <AddOn
        description="Custom theme on your profile"
        name="Customizable Profile"
        plan="2/mo"
      />
    </div>
  );
}

export default AddOns;

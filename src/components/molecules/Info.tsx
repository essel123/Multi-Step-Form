import { InputField } from "../atoms/InputField/InputField";
import "../../App.css";
import { usePersistedState } from "../functions/Data";

function Info() {
  const [name, setname] = usePersistedState("name", "");
  const [address, setaddres] = usePersistedState("address", "");
  const [number, setnumber] = usePersistedState("number", "");
  return (
    <div className="slide-in">
      <InputField
        name="Name"
        onChange={event => {
          setname(event.target.value);
        }}
        placeholder="essel apusiga"
        type="text"
        value={name}
      />

      <InputField
        name="Email Address"
        onChange={event => {
          setaddres(event.target.value);
        }}
        placeholder="essel.abraham@amalitech.com"
        type="email"
        value={address}
      />
      <InputField
        name="Phone Number"
        onChange={event => {
          setnumber(event.target.value);
        }}
        placeholder="+233532911103"
        type="text"
        value={number}
      />
    </div>
  );
}

export default Info;

import { InputField } from "../atoms/InputField/InputField";
import '../../App.css'

function Info() {
  return (
    <div className="slide-in">
      <InputField
        name="Name"
        onType={() => {}}
        placeholder="essel apusiga"
        type="text"
      />

      <InputField
        name="Email Address"
        onType={() => {}}
        placeholder="essel.abraham@amaltich.com"
        type="email"
      />
      <InputField
        name="Phone Number"
        onType={() => {}}
        placeholder="+233532911103"
        type="text"
      />
    </div>
  );
}

export default Info;

import { InputField } from "../atoms/InputField/InputField";
import "../../App.css";

function Info() {
 
  return (
    <div className="slide-in">
      <InputField
        name="Name"
        onChange={() => {
        
        }}
        placeholder="essel apusiga"
        type="text"
        value={''}
      />

      <InputField
        name="Email Address"
        onChange={() => {
         
        }}
        placeholder="essel.abraham@amalitech.com"
        type="email"
        value={''}
      />
      <InputField
        name="Phone Number"
        onChange={() => {
         
        }}
        placeholder="+233532911103"
        type="text"
        value={''}
      />
    </div>
  );
}

export default Info;

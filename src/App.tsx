import Subscribe from "./components/atoms/HomePage/Subscribe";
import FormPage from "./components/molecules/FormPage/FormPage";
import {
  gotopage,
  setFormStarted,
  setFormCompleted,
  setEmail,
  setName,
  setNumber,
  setSelectedPlan,
  setTotalPrice,
  setSelectedAddons,
  setCheckedStates,
  setPlanOption,
  setPlanValue,
  setYearly,
  resetSelectedAddons
} from "./reduxState/stateSlice";
import { PageController, FormStarted } from "./function/Functions";
import "./App.css";
function App() {
  const StateController = PageController();

  const isFormStarted = FormStarted();

  const handleClick = () => {
    StateController(setFormStarted(true));
    StateController(setFormCompleted(false));
    StateController(gotopage(0));
  };

  const handleFormReset = () => {
    StateController(setEmail(""));
    StateController(setName(""));
    StateController(setNumber(""));
    StateController(gotopage(0));
    StateController(setSelectedPlan(-1));
    StateController(setTotalPrice(0));
    StateController(setSelectedAddons([]));
    StateController(setCheckedStates([false, false, false]));
    StateController(setPlanOption(""));
    StateController(setPlanValue(""));
    StateController(setYearly(false));
    StateController(resetSelectedAddons());
  };
  return (
    <div>
      {isFormStarted
        ? <FormPage />
        : <Subscribe
            handleClick={() => {
              handleClick();
              handleFormReset();
            }}
          />}
    </div>
  );
}

export default App;

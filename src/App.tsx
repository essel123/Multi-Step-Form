import Subscribe from "./components/atoms/HomePage/Subscribe";
import FormPage from "./components/molecules/FormPage/FormPage";
import { gotopage,setFormStarted } from "./reduxState/stateSlice";
import { ChangePage,FormStarted } from "./function/Functions";
import "./App.css";
function App() {
  // const [isFormStarted, setFormStarted] = usePersistedState(
  //   "isFormStarted",
  //   false
  // );

  const setformPage = ChangePage();
 
  const isFormStarted =  FormStarted();
  const handleClick = () => {
    setformPage(( setFormStarted(true)))
    setformPage(gotopage(0));
  };
  return (
    <>
      {isFormStarted
        ? <FormPage />
        : <Subscribe
            handleClick={() => {
              handleClick();
            }}
          />}
    </>
  );
}

export default App;

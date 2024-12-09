import Subscribe from "./components/atoms/HomePage/Subscribe";
import { usePersistedState } from "./function/Functions";
import FormPage from "./components/molecules/FormPage/FormPage";
import './App.css'

function App() {
  const [isFormStarted, setFormStarted] = usePersistedState(
    "isFormStarted",
    false
  );

  const handleClick = () => {
    setFormStarted(true);
  };
  return (
    <div className="scale">
      {isFormStarted
        ? <FormPage />
        : <Subscribe
            handleClick={() => {
              handleClick()
            }}
          />}
    </div>
  );
}

export default App;

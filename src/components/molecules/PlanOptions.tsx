import { PlanOption, usePersistedState } from "../functions/Data";
import { Plan } from "./Plan/Plan";

import "../../App.css";
import { Toggler } from "../atoms/Toggler/Toggler";

function PlanOptions() {
  // eslint-disable-next-line prefer-const
  let [selectedPlan, setSelectedPlan] = usePersistedState("selectedPlan", -1);

  const [plan, setplan] = usePersistedState("plan", false);

  const Options = PlanOption();

  const [borderColor, setborderColor] = usePersistedState(
    "borderColor",
    "rgba(214, 217, 230, 1)"
  );


  return (
    <div className="slide-in">
      <div className="planoptions">
        {Options.map((dt, index) => {
          return (
            <Plan
              handleClick={() => {
                selectedPlan = index;
                setSelectedPlan(selectedPlan);

                if (index === selectedPlan) {
                  setborderColor("rgba(72, 62, 255, 1)");
                  localStorage.setItem("planoption", dt.title);
                  localStorage.setItem(
                    "planvalue",
                    plan ? dt.yearplan : dt.monthplan
                  );
                }
              }}
              isBenefit={plan}
              benefit={dt.benefit}
              borderColor={`${index === selectedPlan
                ? borderColor
                : "rgba(214, 217, 230, 1)"}`}
              icon={dt.icon}
              planprice={plan ? dt.yearplan : dt.monthplan}
              title={dt.title}
              key={index}
            />
          );
        })}
      </div>

      <Toggler
        checked={plan}
        key={plan}
        monthcolor={plan ? " rgba(2, 41, 89, 1)" : "rgba(150, 153, 170, 1)"}
        yearcolor={plan ? " rgba(150, 153, 170, 1)" : "rgba(2, 41, 89, 1)"}
        handleclick={() => {
          setplan(!plan);

        }}
      />
    </div>
  );
}

export default PlanOptions;

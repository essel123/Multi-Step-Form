import { PlanOption, PageController } from "../../function/Functions";
import { Plan } from "./Plan/Plan";

import {
  setPlanOption,
  setPlanValue,
  setSelectedPlan,
  setYearly
} from "../../reduxState/stateSlice";

import "../../App.css";
import { Toggler } from "../atoms/Toggler/Toggler";
import { useAppSelector } from "../../reduxState/types";
import { useState } from "react";

function PlanOptions() {
  const controler = PageController();

  let selectedPlan = useAppSelector(state => state.pageState.selectedPlan);

  const yearly = useAppSelector(state => state.pageState.yearly);

  const Options = PlanOption();

  const [borderColor] = useState("blue");

  const handlePlan = (index: number) => {
    controler(setSelectedPlan(index));
    controler(setPlanOption(Options[index].title));
    controler(
      setPlanValue(
        yearly ? `$${Options[index].yearplan}` : `$${Options[index].monthplan}`
      )
    );
  };

  return (
    <div className="slide-in">
      <div className="planoptions">
        {Options.map((dt, index) => {
          return (
            <Plan
              handleClick={() => {
                handlePlan(index);
              }}
              isBenefit={yearly}
              benefit={dt.benefit}
              borderColor={`${index === selectedPlan
                ? borderColor
                : "rgba(214, 217, 230, 1)"}`}
              icon={dt.icon}
              planprice={yearly ? dt.yearplan : dt.monthplan}
              title={dt.title}
              key={index}
            />
          );
        })}
      </div>

      <Toggler
        checked={yearly}
        monthcolor={yearly ? " rgba(2, 41, 89, 1)" : "rgba(150, 153, 170, 1)"}
        yearcolor={yearly ? " rgba(150, 153, 170, 1)" : "rgba(2, 41, 89, 1)"}
        handleclick={() => {
          controler(setYearly(!yearly));

          controler(
            setPlanValue(
              yearly
                ? Options[selectedPlan].monthplan
                : Options[selectedPlan].yearplan
            )
          );
        }}
      />
    </div>
  );
}

export default PlanOptions;

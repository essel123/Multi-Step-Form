import { useState, useEffect } from "react";

import '../App.css'
// Sample plans data
const plans = [
  { title: "Basic Plan", planValue: "basic" },
  { title: "Standard Plan", planValue: "standard" },
  { title: "Premium Plan", planValue: "premium" },
];

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ title: string; planValue: string }>({ title: "", planValue: "" });

  // Load the selected plan from localStorage on initial render (optional)
  useEffect(() => {
    const savedPlan = localStorage.getItem("selectedPlan");
    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan));
    }
  }, []);

  // Function to handle plan selection and save to localStorage
  const handleSelectPlan = (plan: { title: string; planValue: string }) => {
    setSelectedPlan(plan);
    localStorage.setItem("selectedPlan", JSON.stringify(plan)); // Save selected plan to localStorage
  };

  return (
    <div>
      <h2>Select a Plan</h2>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            <button onClick={() => handleSelectPlan(plan)}>
              {plan.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedPlan.title && (
        <div>
          <h3>Selected Plan:</h3>
          <p>Title: {selectedPlan.title}</p>
          <p>Plan Value: {selectedPlan.planValue}</p>
        </div>
      )}
    </div>
  );
};

export default PlanSelection;

import React, { useEffect, useState } from "react";
import SelectedAdon from "../../atoms/SelectedAdon/SelectedAdon";
import { SelectedPlan } from "../../atoms/SelectedPlan/SelectedPlan";
import styles from "./Finishing.module.css";

type Props = {
  onClick: () => void;
};

interface SelectedAddonData {
  name: string;
  plan: string;
}

const Finishing: React.FC<Props> = ({ onClick }) => {
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddonData[]>([]);
  const plan = localStorage.getItem("plan");

  useEffect(() => {
    const storedAddons = localStorage.getItem("selectedAddons");
    if (storedAddons) {
      setSelectedAddons(JSON.parse(storedAddons));
    }
  }, []);
  const extractPrice = (plan: string) => {
    const price = parseInt(plan.split("/")[0]); // Remove "mo" or "yr" and parse the number
    return isNaN(price) ? 0 : price;
  };

  // Calculate total price by adding up the extracted prices from selected add-ons
  const totalAddonsPrice = selectedAddons.reduce((total, addon) => {
    return total + extractPrice(addon.plan);
  }, 0);

  return (
    <div className="slide-in">
      <div className={styles.section}>
        <main className={styles.main}>
          <div>
            <SelectedPlan
              name={`${localStorage.getItem("planoption")}`}
              term={plan === "true" ? "Yearly" : "Monthly"}
              rate={parseInt(`${localStorage.getItem("planvalue")}`)}
              term_={plan === "true" ? "yr" : "mon"}
              onClick={onClick}
            />
          </div>
          <div className={styles.line} />
          {selectedAddons.length > 0
            ? selectedAddons.map(addon => {
                return (
                  <SelectedAdon
                    key={addon.name}
                    title={addon.name}
                    price={parseInt(addon.plan)}
                    term={plan === "true" ? "yr" : "mon"}
                  />
                );
              })
            : <p>No add-ons selected.</p>}
        </main>

        <div className={styles.total}>
          <h2>
            Total (per {plan === "true" ? "year" : "month"})
          </h2>
          <h3>
            ${totalAddonsPrice +
              parseInt(`${localStorage.getItem("planvalue")}`)}/{plan === "true" ? "yr" : "mon"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Finishing;

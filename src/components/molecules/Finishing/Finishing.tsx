import React, { useEffect } from "react";
import SelectedAdon from "../../atoms/SelectedAdon/SelectedAdon";
import { SelectedPlan } from "../../atoms/SelectedPlan/SelectedPlan";
import styles from "./Finishing.module.css";
import { useAppSelector } from "../../../reduxState/types";
import { setTotalPrice } from "../../../reduxState/stateSlice";
import { PageController } from "../../../function/Functions";

type FinishingProps = {
  onClick: () => void;
};

// interface SelectedAddonData {
//   name: string;
//   plan: string;
// }

const Finishing: React.FC<FinishingProps> = ({ onClick }) => {
  const yearly = useAppSelector(state => state.pageState.yearly);
  const pricing = useAppSelector(
    state => state.pageState.formData.plan.pricing
  );

  const storedAddons = useAppSelector(state => state.pageState.adonData);
  const planoption = useAppSelector(
    state => state.pageState.formData.plan.title
  );

  const controller = PageController();
  const totalPrice = useAppSelector(state => state.pageState.totalPrice);

  const services = storedAddons;
  // Initialize sum variable

  useEffect(() => {
    let totalSum = 0;
    const planPrice = parseFloat(pricing.replace(/[^0-9.]/g, ""));

    services.forEach(service => {
      const adonsTotal = parseFloat(service.plan.replace(/[^0-9.]/g, ""));
      if (!isNaN(adonsTotal)) {
        totalSum += adonsTotal;
      }
    });

    controller(setTotalPrice(totalSum + planPrice));
  }, []);

  return (
    <div className="slide-in">
      <div className={styles.section}>
        <main className={styles.main}>
          <SelectedPlan
            name={planoption}
            term={yearly ? "Yearly" : "Monthly"}
            rate={pricing}
            onClick={onClick}
          />

          <div className={styles.line} />
          {storedAddons.length > 0
            ? storedAddons.map(addon => {
                return (
                  <SelectedAdon
                    key={addon.name}
                    title={addon.name}
                    price={parseInt(addon.plan)}
                    term={yearly ? "yr" : "mon"}
                  />
                );
              })
            : <p>No add-ons selected.</p>}
        </main>
        <div className={styles.total}>
          <h2>
            Total (per {yearly ? "year" : "month"})
          </h2>
          <h3>
            ${totalPrice}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Finishing;

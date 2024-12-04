import styles from "./FormPage.module.css";

import { Steps, StepDetails, usePersistedState } from "../../functions/Data";
import { Step } from "../../atoms/Steps/Step";
import { StepTitle } from "../../atoms/steptitle/StepTitle";
import NavButtons from "../NavButtons/NavButtons";
import Info from "../Info";
import PlanOptions from "../PlanOptions";
import AddOns from "../AddOns";

function FormPage() {
  const [nexPgae, setNexPgae] = usePersistedState("nextPage", 0);
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.center}>
          <aside className={styles.leftaside}>
            <ul>
              {Steps().map((dt, id) =>
                <li className={styles.li} key={id}>
                  {
                    <Step
                      id_bg_color={
                        id === nexPgae
                          ? "rgba(190, 226, 253, 1)"
                          : "transparent"
                      }
                      id_color={id === nexPgae ? "rgba(2, 41, 89, 1)" : "white"}
                      border_color={id === nexPgae ? "transparent" : " white"}
                      formtitle={dt.title}
                      id={dt.id}
                    />
                  }
                </li>
              )}
            </ul>
          </aside>

          <aside className={styles.rightaside}>
            {StepDetails().map((dt, index) => {
              if (index === nexPgae) {
                return (
                  <StepTitle description={dt.description} title={dt.title} />
                );
              }
            })}
            {nexPgae === 0
              ? <Info />
              : nexPgae === 1
                ? <PlanOptions />
                : nexPgae === 2 ? <AddOns /> : "page4"}
            <div className={styles.bottom}>
              <NavButtons
                nextClick={() => {
                  setNexPgae(nexPgae + 1);
                  console.log(nexPgae);
                }}
                prevClick={() => {
                  setNexPgae(nexPgae - 1);
                  console.log(nexPgae);
                }}
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default FormPage;

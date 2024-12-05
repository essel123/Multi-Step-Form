import styles from "./FormPage.module.css";

import { Steps, StepDetails, usePersistedState } from "../../functions/Data";
import { Step } from "../../atoms/Steps/Step";
import { StepTitle } from "../../atoms/StepTitle/StepTitle";

import Info from "../Info";
import PlanOptions from "../PlanOptions";
import AddOns from "../AddOns";
import { Button } from "../../atoms/Button/Button";
import Finishing from "../Finishing/Finishing";

function FormPage() {
  const [nextPage, setnextPage] = usePersistedState("nextPage", 0);

  // function isEmpty(str:string) {
  //   return str.trim().length === 0;
  // }
  // const name = localStorage.getItem("name");
  // const address = localStorage.getItem("address");
  // const number = localStorage.getItem("number");
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
                        id === nextPage
                          ? "rgba(190, 226, 253, 1)"
                          : "transparent"
                      }
                      id_color={
                        id === nextPage ? "rgba(2, 41, 89, 1)" : "white"
                      }
                      border_color={id === nextPage ? "transparent" : " white"}
                      formtitle={dt.title}
                      id={dt.id}
                    />
                  }
                </li>
              )}
            </ul>
          </aside>

          <aside className={styles.rightaside}>
            <div className={styles.mobileview}>
              {StepDetails().map((dt, index) => {
                if (index === nextPage) {
                  return (
                    <StepTitle description={dt.description} title={dt.title} />
                  );
                }
              })}
              {nextPage === 0
                ? <form action="">
                    <Info />
                  </form>
                : nextPage === 1
                  ? <PlanOptions />
                  : nextPage === 2
                    ? <AddOns />
                    : <Finishing
                        onClick={() => {
                          setnextPage(1);
                        }}
                      />}
            </div>
            <div className={styles.bottom}>
              {nextPage === 0
                ? <div />
                : <Button
                    bgColor="transparent"
                    color="gray"
                    name="Go back"
                    onClick={() => {
                      setnextPage(nextPage - 1);
                    }}
                  />}

              {nextPage === 3
                ? <Button
                    bgColor="rgba(72, 62, 255, 1)"
                    color="white"
                    name="Confirm"
                    onClick={() => {}}
                  />
                : <Button
                    bgColor=""
                    color="white"
                    name="Next Page"
                    onClick={() => {
                      setnextPage(nextPage + 1);
                    }}
                  />}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default FormPage;

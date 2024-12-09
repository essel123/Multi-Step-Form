import styles from "./FormPage.module.css";

import {
  Steps,
  StepDetails,
  usePersistedState,
  Fields,
  reDirectToHomePage
} from "../../../function/Functions";
import { Step } from "../../atoms/Steps/Step";
import { StepTitle } from "../../atoms/StepTitle/StepTitle";

import PlanOptions from "../PlanOptions";
import AddOns from "../AddOns";
import { Button } from "../../atoms/Button/Button";
import Finishing from "../Finishing/Finishing";
import Success from "../../atoms/Success/Success";
import { InputField } from "../../atoms/InputField/InputField";
import { useState } from "react";

const FormPage: React.FC = () => {
  const [nextPage, setNextPage] = usePersistedState("nextPage", 0);
  const [isFormCompleted, setFormCompleted] = usePersistedState(
    "isFormCompleted",
    false
  );

  // Form field states
  const [name, setName] = usePersistedState("name", "");
  const [address, setAddress] = usePersistedState("address", "");
  const [number, setNumber] = usePersistedState("number", "");
  const [emptyFields, setEmptyFields] = useState({
    name: false,
    address: false,
    number: false
  });

  // Function to check if fields are empty
  const checkEmptyFields = () => {
    setEmptyFields({
      name: name.trim() === "",
      address: address.trim() === "",
      number: number.trim() === ""
    });
  };

  // Handler for form submission (validation and progress)
  const handleNextPage = () => {
    if (nextPage === 0) {
      checkEmptyFields();
      if (name.trim() === "" || address.trim() === "" || number.trim() === "") {
        checkEmptyFields();
      } else {
        setNextPage(nextPage + 1); // Proceed to next page if validation passes
      }
    } else {
      setNextPage(nextPage + 1); // Move to the next page
    }
  };

  const handleGoBack = () => {
    setNextPage(nextPage - 1);
    setFormCompleted(false); // Reset completion status on going back
  };

  const renderFormContent = () => {
    const fields = Fields();
    switch (nextPage) {
      case 0:
        return (
          <form className="slide-in">
            {fields.map((field, index) =>
              <InputField
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                value={index === 0 ? name : index === 1 ? address : number}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (index === 0) {
                    setName(event.target.value);
                  } else if (index === 1) {
                    setAddress(event.target.value);
                  } else {
                    setNumber(event.target.value);
                  }
                  checkEmptyFields();
                }}
                required={
                  emptyFields[
                    index === 0 ? "name" : index === 1 ? "address" : "number"
                  ]
                    ? "This field is required"
                    : ""
                }
                borderstyle={
                  emptyFields[
                    index === 0 ? "name" : index === 1 ? "address" : "number"
                  ]
                    ? "1px solid rgba(238, 55, 74, 1)"
                    : "1px solid #ccc"
                }
              />
            )}
          </form>
        );
      case 1:
        return <PlanOptions />;
      case 2:
        return <AddOns />;
      case 3:
        return isFormCompleted
          ? <Success />
          : <Finishing onClick={() => setNextPage(1)} />;
      default:
        return null;
    }
  };

  const renderStepDetails = () => {
    const steps = StepDetails();
    return steps.map((dt, index) => {
      if (index === nextPage) {
        return (
          <StepTitle
            key={index}
            description={dt.description}
            title={dt.title}
          />
        );
      }
      return null;
    });
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.center}>
          <aside className={styles.leftaside}>
            <ul>
              {Steps().map((dt, id) =>
                <li className={styles.li} key={id}>
                  <Step
                    handleClick={() => {
                      if (nextPage === 0) {
                        checkEmptyFields();
                        if (
                          name.trim() === "" ||
                          address.trim() === "" ||
                          number.trim() === ""
                        ) {
                          checkEmptyFields();
                        } else {
                          setNextPage(id); // Proceed to next page if validation passes
                        }
                      } else {
                        setNextPage(id); // Move to the next page
                      }
                    }}
                    id_bg_color={
                      isFormCompleted
                        ? "transparent"
                        : id === nextPage
                          ? "rgba(190, 226, 253, 1)"
                          : "transparent"
                    }
                    id_color={
                      isFormCompleted
                        ? "white"
                        : id === nextPage ? "rgba(2, 41, 89, 1)" : "white"
                    }
                    border_color={
                      isFormCompleted
                        ? "white"
                        : id === nextPage ? "transparent" : "white"
                    }
                    formtitle={dt.title}
                    id={dt.id}
                  />
                </li>
              )}
            </ul>
          </aside>

          <aside className={styles.rightaside}>
            <div className={styles.mobileview}>
              {isFormCompleted ? null : renderStepDetails()}
              {renderFormContent()}
            </div>
            {isFormCompleted
              ? <div />
              : <div className={styles.bottom}>
                  {nextPage === 0
                    ? <div />
                    : <Button
                        bgColor="transparent"
                        color="gray"
                        name="Go back"
                        onClick={handleGoBack}
                      />}

                  {nextPage === 3
                    ? <Button
                        bgColor="rgba(72, 62, 255, 1)"
                        color="white"
                        name="Confirm"
                        onClick={() => {
                          reDirectToHomePage();
                          setFormCompleted(true);
                        }}
                      />
                    : <Button
                        bgColor=""
                        color="white"
                        name="Next Page"
                        onClick={handleNextPage}
                      />}
                </div>}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default FormPage;

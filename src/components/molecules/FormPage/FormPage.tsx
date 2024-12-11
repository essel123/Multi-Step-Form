import styles from "./FormPage.module.css";

import {
  Steps,
  StepDetails,
  usePersistedState,
  Fields,
  reDirectToHomePage,
  CurrentPage,
  ChangePage
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
import {
  next,
  prev,
  gotopage,
  setFormStarted
} from "../../../reduxState/stateSlice";

const FormPage: React.FC = () => {
  const currentPage = CurrentPage();

  const changePage = ChangePage();

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
    if (currentPage === 0) {
      checkEmptyFields();
      if (name.trim() === "" || address.trim() === "" || number.trim() === "") {
        checkEmptyFields();
      } else {
        changePage(next());
      }
    } else {
      changePage(next());
    }
  };

  const handleGoBack = () => {
    changePage(prev());
    setFormCompleted(false); // Reset completion status on going back
  };

  const renderFormContent = () => {
    const fields = Fields();
    switch (currentPage) {
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
          : <Finishing onClick={() => changePage(gotopage(1))} />;
      default:
        return null;
    }
  };

  const renderStepDetails = () => {
    const steps = StepDetails();
    return steps.map((dt, index) => {
      if (index === currentPage) {
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
    <main className={styles.main}>
      <div className={styles.center}>
        <aside className={styles.leftaside}>
          <ul>
            {Steps().map((dt, id) =>
              <li className={styles.li} key={id}>
                <Step
                  handleClick={() => {
                    if (currentPage === 0) {
                      checkEmptyFields();
                      if (
                        name.trim() === "" ||
                        address.trim() === "" ||
                        number.trim() === ""
                      ) {
                        checkEmptyFields();
                      } else {
                        changePage(gotopage(id)); // Proceed to next page if validation passes
                      }
                    } else {
                      changePage(gotopage(id)); // Move to the next page
                    }
                  }}
                  id_bg_color={
                    isFormCompleted
                      ? "transparent"
                      : id === currentPage
                        ? "rgba(190, 226, 253, 1)"
                        : "transparent"
                  }
                  id_color={
                    isFormCompleted
                      ? "white"
                      : id === currentPage ? "rgba(2, 41, 89, 1)" : "white"
                  }
                  border_color={
                    isFormCompleted
                      ? "white"
                      : id === currentPage ? "transparent" : "white"
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
                {currentPage === 0
                  ? <div />
                  : <Button
                      bgColor="transparent"
                      color="gray"
                      name="Go back"
                      onClick={handleGoBack}
                    />}

                {currentPage === 3
                  ? <Button
                      bgColor="rgba(72, 62, 255, 1)"
                      color="white"
                      name="Confirm"
                      onClick={() => {
                        reDirectToHomePage();
                        setFormCompleted(true);
                        setTimeout(() => changePage(setFormStarted(false)), 2000);
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

      <footer className={styles.footer}>
        {currentPage === 0
          ? <div />
          : <Button
              bgColor="transparent"
              color="gray"
              name="Go back"
              onClick={handleGoBack}
            />}

        {currentPage === 3
          ? <Button
              bgColor="rgba(72, 62, 255, 1)"
              color="white"
              name="Confirm"
              onClick={() => {
                reDirectToHomePage();
                setFormCompleted(true);
                setTimeout(() => changePage(setFormStarted(false)), 2000);
              }}
            />
          : <Button
              bgColor=""
              color="white"
              name="Next Page"
              onClick={handleNextPage}
            />}
      </footer>
    </main>
  );
};

export default FormPage;

import { useEffect, useState } from "react";

  const usePersistedState = (key:string,value:unknown) => {
    const [state, setState] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : value;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
  
    return [state, setState] as const;
  }


const Steps = () => {
  const Data = [
    {
      id: 1,
      title: "YOUR INFO"
    },
    {
      id: 2,
      title: "SELECT PLAN"
    },
    {
      id: 3,
      title: "ADD-ONS"
    },
    {
      id: 4,
      title: "SUMMARY"
    }
  ];

  return Data;
};


const StepDetails = () => {
  const Data = [
    {
      title: "Personal info",
      description: "Please provide your name, email address, and phone number."
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing."
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience."
    },{
        title: "Finishing up",
        description: "Double-check everything looks OK before confirming."
      }
  ];

  return Data;
};



const PlanOption = () =>{
    const Data =  [
        {
            "icon": "../images/icon-arcade.svg",
            "title": "Arcade",
            "monthplan": "9/mon",
            "yearplan": "90/yr",
            "benefit": "2 months free",
            "isBenefit": true
          },
        {
          "icon": "../images/icon-advanced.svg",
          "title": "Advance",
          "monthplan": "12/mon",
          "yearplan":"120/yr",
          "benefit": "2 months free",
          "isBenefit": true
        },
        {
          "icon": "../images/icon-pro.svg",
          "title": "Pro",
          "monthplan": "15/mon",
          "yearplan" : "150/yr",
          "benefit": "2 months free",
          "isBenefit": true
        }
      ]


      return Data;
}



// eslint-disable-next-line react-refresh/only-export-components
export { Steps, StepDetails, usePersistedState,PlanOption};

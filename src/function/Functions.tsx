import { useEffect, useState } from "react";
 import { useAppDispatch,useAppSelector } from "../reduxState/types";
import { setFormStarted } from "../reduxState/stateSlice";

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

const registeredData = () =>{

  const userData =  {
    name: localStorage.getItem('name'),
    addres: localStorage.getItem('address'),
    number:localStorage.getItem('number'),
    plan: {
      title:localStorage.getItem('planoption'),
      value:localStorage.getItem('planvalue')
    },
    selectedAddons:JSON.parse( `${localStorage.getItem('selectedAddons')}`)

  }

   const data = JSON.stringify(userData)
 localStorage.setItem('userData',data)

 return (data);
}


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

const name = localStorage.getItem('name');
const addres = localStorage.getItem('address');
const number =  localStorage.getItem('number');

const Fields = () => {

  return [
    {
      "name": "Name",
      "type": "text",
      "placeholder": "essel apusiga",
      "value": name
    },
    {
      "name": "Email Address",
      "type": "email",
      "placeholder": "essel.abraham@amalitech.com",
      "value": addres
    },
    {
      "name": "Phone Number",
      "type": "text",
      "placeholder": "+233532911103",
      "value": number
    }
  ];
  
}


const addonData = () =>{
  

  return [
    {
      "name": "Online service",
      "description": "Access to multiplayer games",
      "moAddon": "1/mo",
      "yrAddon": "10/yr"
    },
    {
      "name": "Larger storage",
      "description": "Extra 1TB of cloud save",
      "moAddon": "2/mo",
      "yrAddon": "20/yr"
    },
    {
      "name": "Customizable Profile",
      "description": "Custom theme on your profile",
      "moAddon": "2/mo",
      "yrAddon": "20/yr"
    }
  ]
  
}



const CurrentPage = () =>{

  const currentPage = useAppSelector(
    (state) => state.pagestate.pageIndex
  );
  
  return currentPage;
 
}


const ChangePage = () =>{
  const changePage = useAppDispatch();

  return changePage;
}

const FormStarted = () =>{
  const formStarted = useAppSelector((state)=>state.pagestate.isFormStarted)

  return formStarted;
}



const  remove = (item: string) => {
  localStorage.removeItem(item);
}
const reDirectToHomePage = () => {
  
  setTimeout(() => {
    registeredData();
    localStorage.setItem("isFormStarted", "false");
    window.location.reload();
    remove("plan");
    remove("name");
    remove("address");
    remove("number");
    remove("borderColor");
    remove("planoption");
    remove("planvalue");
    remove("checked");
    remove("checked1");
    remove("checked2");
    remove("checkedStates");
    remove('selectedAddons')
    remove("selectedPlan");
    localStorage.setItem("nextPage", "0");
    localStorage.setItem("isFormCompleted", "false");
   
  }, 2000);
}



// eslint-disable-next-line react-refresh/only-export-components
export { Steps, StepDetails, usePersistedState,PlanOption,Fields,registeredData,addonData,reDirectToHomePage,CurrentPage,ChangePage,FormStarted};

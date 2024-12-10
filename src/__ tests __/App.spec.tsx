import {
  Steps,
  StepDetails,
  PlanOption,
  Fields,
  addonData
} from "../function/Functions"; // Adjust import path as necessary

describe("Steps function", () => {
  it("should return the correct JSON structure", () => {
    const expected = [
      { id: 1, title: "YOUR INFO" },
      { id: 2, title: "SELECT PLAN" },
      { id: 3, title: "ADD-ONS" },
      { id: 4, title: "SUMMARY" }
    ];

    const result = Steps();

    // Check if the result matches the expected data
    expect(result).toEqual(expected);
  });
});

describe("StepDetails function", () => {
  it("should return the correct JSON structure", () => {
    const expected = [
      {
        title: "Personal info",
        description:
          "Please provide your name, email address, and phone number."
      },
      {
        title: "Select your plan",
        description: "You have the option of monthly or yearly billing."
      },
      {
        title: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience."
      },
      {
        title: "Finishing up",
        description: "Double-check everything looks OK before confirming."
      }
    ];

    const result = StepDetails();

    // Check if the result matches the expected data
    expect(result).toEqual(expected);
  });
});

describe("PlanOption function", () => {
  it("should return the correct JSON structure", () => {
    const expected = [
      {
        icon: "../images/icon-arcade.svg",
        title: "Arcade",
        monthplan: "9/mon",
        yearplan: "90/yr",
        benefit: "2 months free",
        isBenefit: true
      },
      {
        icon: "../images/icon-advanced.svg",
        title: "Advance",
        monthplan: "12/mon",
        yearplan: "120/yr",
        benefit: "2 months free",
        isBenefit: true
      },
      {
        icon: "../images/icon-pro.svg",
        title: "Pro",
        monthplan: "15/mon",
        yearplan: "150/yr",
        benefit: "2 months free",
        isBenefit: true
      }
    ];

    const result = PlanOption();

    // Check if the result matches the expected data
    expect(result).toEqual(expected);
  });
});
beforeEach(() => {
    Storage.prototype.getItem = jest.fn().mockImplementation((key:number) => {
      const mockData = {
        name: 'essel apusiga',
        address: 'essel.abraham@amalitech.com',
        number: '+233532911103'
      };
      return mockData[key];
    });
  
    Storage.prototype.setItem = jest.fn();  // Mock the setItem function
  });
  
  describe("Fields function", () => {
    it("should return the correct JSON structure", () => {
      const expected = [
        {
          name: "Name",
          type: "text",
          placeholder: "essel apusiga",
          value: 'essel apusiga'
        },
        {
          name: "Email Address",
          type: "email",
          placeholder: "essel.abraham@amalitech.com",
          value: 'essel.abraham@amalitech.com'
        },
        {
          name: "Phone Number",
          type: "text",
          placeholder: "+233532911103",
          value: '+233532911103'
        }
      ];
  
      const result = Fields();
  
      // Check if the result matches the expected data
      expect(result).toEqual(expected);
    });
  });
describe("addonData function", () => {
  it("should return the correct JSON structure", () => {
    const expected = [
      {
        name: "Online service",
        description: "Access to multiplayer games",
        moAddon: "1/mo",
        yrAddon: "10/yr"
      },
      {
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        moAddon: "2/mo",
        yrAddon: "20/yr"
      },
      {
        name: "Customizable Profile",
        description: "Custom theme on your profile",
        moAddon: "2/mo",
        yrAddon: "20/yr"
      }
    ];

    const result = addonData();

    // Check if the result matches the expected data
    expect(result).toEqual(expected);
  });
});

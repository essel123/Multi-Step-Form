import { createSlice } from "@reduxjs/toolkit";

interface PlanData {
  title: string;
  pricing: string;
}

type AdonData = {
  [key: string]: any;
};

interface FormData {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly plan: PlanData;
}

interface StateData {
  readonly pageIndex: number;
  readonly isFormStarted: boolean;
  readonly isFormCompleted: boolean;
  readonly selectedPlan: number;
  readonly yearly: boolean;
  readonly formData: FormData;
  readonly checkedStates: boolean[];
  readonly adonData: AdonData[];
  readonly totalPrice: number;
}

const initialState: StateData = {
  pageIndex: 0,
  isFormStarted: false,
  isFormCompleted: false,
  formData: {
    name: "",
    email: "",
    phone: "",
    plan: {
      title: "",
      pricing: ""
    }
  },
  selectedPlan: -1,
  yearly: false,
  checkedStates: [false, false, false],
  adonData: [],
  totalPrice: 0
};

export const stateSlice = createSlice({
  name: "FormState",
  initialState,
  reducers: {
    next: state => {
      state.pageIndex++;
    },
    prev: state => {
      state.pageIndex--;
    },

    gotopage: (state, action) => {
      state.pageIndex = action.payload;
    },

    setFormStarted: (state, action) => {
      state.isFormStarted = action.payload;
    },
    setFormCompleted: (state, action) => {
      state.isFormCompleted = action.payload;
    },
    setName: (state, action) => {
      state.formData.name = action.payload;
    },
    setEmail: (state, action) => {
      state.formData.email = action.payload;
    },
    setNumber: (state, action) => {
      state.formData.phone = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },

    setPlanOption: (state, action) => {
      state.formData.plan.title = action.payload;
    },

    setPlanValue: (state, action) => {
      state.formData.plan.pricing = action.payload;
    },
    setYearly: (state, action) => {
      state.yearly = action.payload;
    },

    setCheckedStates: (state, action) => {
      state.checkedStates = action.payload;
    },

    setSelectedAddons(state, action) {
      state.adonData.push(action.payload);
    },

    resetSelectedAddons(state) {
      state.adonData = [];
    },

    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    }
  }
});

export const {
  next,
  prev,
  gotopage,
  setFormStarted,
  setFormCompleted,
  setName,
  setEmail,
  setNumber,
  setPlanOption,
  setPlanValue,
  setSelectedPlan,
  setYearly,
  setCheckedStates,
  setSelectedAddons,
  setTotalPrice,
  resetSelectedAddons
} = stateSlice.actions;

export default stateSlice.reducer;

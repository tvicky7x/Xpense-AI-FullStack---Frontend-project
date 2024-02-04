import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseCategories: [],
  incomeCategories: [],
  category: {
    name: "Categories",
    icon: "label",
  },
  accountForm: {
    id: "",
    isIncome: false,
    amount: "",
    category: {
      name: "Categories",
      icon: "label",
    },
    date: `${new Date().toISOString().slice(0, 10)}`,
    time: `${new Date().toTimeString().slice(0, 5)}`,
    note: "",
  },
  allExpenseList: [],
  allExpenseBalance: {
    incomeBalance: 0,
    expenseBalance: 0,
    totalBalance: 0,
  },
  currentExpenseList: [],
  currentExpenseBalance: {
    incomeBalance: 0,
    expenseBalance: 0,
    totalBalance: 0,
  },
  current: {
    dateString: new Date().toLocaleDateString("en", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    day: new Date().toLocaleString("en", {
      weekday: "long",
    }),
    date: new Date().getDate(),
    month: new Date().toLocaleString("en", {
      month: "long",
    }),
    year: new Date().getFullYear(),
  },
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    addCategories(state, action) {
      state.expenseCategories = action.payload.expenseCategories;
      state.incomeCategories = action.payload.incomeCategories;
    },
    changeCategory(states, action) {
      states.category = action.payload.category;
    },
    resetCategory(states) {
      states.category = {
        name: "Categories",
        icon: "label",
      };
    },
    closeAccountForm(states) {
      states.accountForm = {
        id: "",
        isIncome: false,
        amount: "",
        category: {
          name: "Categories",
          icon: "label",
        },
        date: `${new Date().toISOString().slice(0, 10)}`,
        time: `${new Date().toTimeString().slice(0, 5)}`,
        note: "",
      };
      states.category = {
        name: "Categories",
        icon: "label",
      };
    },
    allExpenseList(states, actions) {
      states.allExpenseList = actions.payload.allExpenseList;
      states.allExpenseBalance = actions.payload.allExpenseBalance;
    },
    currentExpenseList(states, actions) {
      states.currentExpenseList = actions.payload.currentExpenseList;
      states.currentExpenseBalance = actions.payload.currentExpenseBalance;
    },
    changeCurrent(states, actions) {
      if (actions.payload.type === "change") {
        const newDate = new Date(
          new Date(states.current.dateString).setMonth(
            new Date(states.current.dateString).getMonth() +
              actions.payload.value
          )
        );
        states.current.dateString = new Date(newDate).toLocaleDateString("en", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        states.current.day = new Date(newDate).toLocaleString("en", {
          weekday: "long",
        });
        states.current.date = new Date(newDate).getDate();
        states.current.month = new Date(newDate).toLocaleString("en", {
          month: "long",
        });
        states.current.year = new Date(newDate).getFullYear();
      } else if (actions.payload.type === "reset") {
        states.current = {
          dateString: new Date().toLocaleDateString("en", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          day: new Date().toLocaleString("en", {
            weekday: "long",
          }),
          date: new Date().getDate(),
          month: new Date().toLocaleString("en", {
            month: "long",
          }),
          year: new Date().getFullYear(),
        };
      }
    },
    openAccountForm(states, actions) {
      states.accountForm = actions.payload.accountForm;
    },
  },
});

export const accountActions = accountSlice.actions;

export default accountSlice.reducer;

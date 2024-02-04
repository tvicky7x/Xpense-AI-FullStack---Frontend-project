import { accountActions } from "./accountSlice";

export function addAllExpenseList(allExpenseList) {
  return async (dispatch) => {
    allExpenseList.sort(compareDates);
    const allExpenseBalance = makeBalance(allExpenseList);
    dispatch(
      accountActions.allExpenseList({ allExpenseList, allExpenseBalance })
    );
  };
}

function compareDates(a, b) {
  const dateA = new Date(`${a.date.slice(0, 10)}T${a.time}`);
  const dateB = new Date(`${b.date.slice(0, 10)}T${b.time}`);

  return dateB - dateA;
}

export function getCurrentExpenseList(allExpenseList, current) {
  return (dispatch) => {
    const currentExpenseList = allExpenseList.filter((item) => {
      return (
        new Date(item.date).getMonth() ===
          new Date(current.dateString).getMonth() &&
        new Date(item.date).getFullYear() === current.year
      );
    });
    const currentExpenseBalance = makeBalance(currentExpenseList);
    dispatch(
      accountActions.currentExpenseList({
        currentExpenseList,
        currentExpenseBalance,
      })
    );
  };
}

export function updateApp(accountsArray, expenseCategories, incomeCategories) {
  return async (dispatch) => {
    dispatch(
      accountActions.addCategories({ expenseCategories, incomeCategories })
    );
    dispatch(addAllExpenseList(accountsArray));
  };
}

// makeBalance Function;
function makeBalance(list) {
  const expenseBalance = list
    .filter((item) => item.isIncome !== true)
    .reduce((sum, item) => {
      return sum + Number(item.amount);
    }, 0);

  const incomeBalance = list
    .filter((item) => item.isIncome === true)
    .reduce((sum, item) => {
      return sum + Number(item.amount);
    }, 0);

  const totalBalance = incomeBalance - expenseBalance;

  return {
    incomeBalance: incomeBalance,
    expenseBalance: expenseBalance,
    totalBalance: totalBalance,
  };
}

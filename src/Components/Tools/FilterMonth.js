import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../Store/accountSlice";
import IndianRupees from "./IndianRupees";

function FilterMonth() {
  // Redux
  const dispatch = useDispatch();
  const current = useSelector((states) => states.account.current);
  const currentExpenseBalance = useSelector(
    (states) => states.account.currentExpenseBalance
  );

  return (
    <>
      <div className="pb-2 border-b-2 border-slate-400">
        <div className=" flex justify-center items-center text-slate-400 relative">
          <div className="flex items-center">
            <button className="flex hover:text-lime-500 ">
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  dispatch(
                    accountActions.changeCurrent({ type: "change", value: -1 })
                  );
                }}
              >
                arrow_back_ios_new
              </span>
            </button>
            <p className="sm:text-lg text-slate-500 sm:w-40 w-32 text-center">
              {current.month}, {current.year}
            </p>
            <button className="flex hover:text-lime-500">
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  dispatch(
                    accountActions.changeCurrent({ type: "change", value: 1 })
                  );
                }}
              >
                arrow_forward_ios
              </span>
            </button>
          </div>
          <button
            className="flex items-center -ms-5 absolute right-0 hover:text-lime-500 hover:rotate-45 duration-500"
            onClick={() => {
              dispatch(accountActions.changeCurrent({ type: "reset" }));
            }}
          >
            <span className="material-symbols-outlined">cached</span>
          </button>
        </div>
        <div className=" flex justify-around items-center mt-2  text-slate-600 sm:text-lg font-medium">
          <div className=" flex flex-col items-center">
            <p>Expense</p>
            <IndianRupees className=" text-red-500">
              {currentExpenseBalance.expenseBalance}
            </IndianRupees>
          </div>
          <div className=" flex flex-col items-center">
            <p>Income</p>
            <IndianRupees className=" text-green-600">
              {currentExpenseBalance.incomeBalance}
            </IndianRupees>
          </div>
          <div className=" flex flex-col items-center">
            <p>Total</p>
            <IndianRupees
              className={
                Number(currentExpenseBalance.totalBalance) >= 0
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              {Number(currentExpenseBalance.totalBalance)}
            </IndianRupees>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterMonth;

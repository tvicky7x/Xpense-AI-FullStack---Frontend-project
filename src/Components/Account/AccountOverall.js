import React from "react";
import { useSelector } from "react-redux";
import IndianRupees from "../Tools/IndianRupees";

function AccountOverall() {
  const allExpenseBalance = useSelector(
    (states) => states.account.allExpenseBalance
  );
  return (
    <>
      <h2 className="text-slate-500 mb-1 sm:text-2xl text-lg font-semibold text-center">
        Overall
      </h2>
      <div className=" text-slate-600 font-medium text-sm sm:text-base">
        <div className="flex justify-evenly">
          <div className="text-center py-3">
            <p>EXPENSE SO FAR</p>
            <IndianRupees className=" text-red-500">
              {allExpenseBalance.expenseBalance}
            </IndianRupees>
          </div>
          <div className="w-[2.5px] sm:w-[2.4px] bg-slate-300 rounded-t"></div>
          <div className="text-center py-3">
            <p>INCOME SO FAR</p>
            <IndianRupees className=" text-green-600">
              {allExpenseBalance.incomeBalance}
            </IndianRupees>
          </div>
        </div>
        <div className=" h-[2px] bg-slate-300 w-[80%] mx-auto rounded"></div>
        <div className="text-center py-3">
          <p>TOTAL BALANCE</p>
          <IndianRupees
            className={
              Number(allExpenseBalance.totalBalance) >= 0
                ? "text-green-600"
                : "text-red-500"
            }
          >
            {Number(allExpenseBalance.totalBalance)}
          </IndianRupees>
        </div>
      </div>
    </>
  );
}

export default AccountOverall;

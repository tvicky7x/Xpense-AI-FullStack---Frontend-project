import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { analysisAction } from "../../Store/analysisSlice";
import ButtonSecondary from "../util/ButtonSecondary";

function ToggleExpense() {
  const dispatch = useDispatch();
  const showExpense = useSelector((states) => states.analysis.showExpense);
  return (
    <div className=" grid grid-cols-2 gap-3 mt-3">
      <ButtonSecondary
        className={
          showExpense
            ? "bg-lime-400 text-lime-800 "
            : " bg-slate-100 text-slate-500 hover:bg-slate-200"
        }
        onClick={() => {
          if (!showExpense) {
            dispatch(analysisAction.toggleExpense());
          }
        }}
      >
        Expense
      </ButtonSecondary>

      <ButtonSecondary
        className={
          !showExpense
            ? "bg-lime-400  text-lime-800 "
            : " bg-slate-100 text-slate-500 hover:bg-slate-200"
        }
        onClick={() => {
          if (showExpense) {
            dispatch(analysisAction.toggleExpense());
          }
        }}
      >
        Income
      </ButtonSecondary>
    </div>
  );
}

export default ToggleExpense;

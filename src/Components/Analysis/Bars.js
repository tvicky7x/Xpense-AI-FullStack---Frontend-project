import React from "react";
import { useSelector } from "react-redux";
import IndianRupees from "../Tools/IndianRupees";

function Bars({ category, data }) {
  const showExpense = useSelector((states) => states.analysis.showExpense);

  return (
    <li className="py-3">
      <div className="text-slate-500 font-medium flex justify-between items-center">
        <span className="material-symbols-outlined text-lime-500">
          {category[0].icon}
        </span>
        <div className=" w-full me-2 ms-1 text-base">
          <div className="flex justify-between px-1">
            <p>{data.title}</p>
            <IndianRupees
              className={showExpense ? "text-red-500" : "text-green-600"}
            >
              {`${data.value}`}
            </IndianRupees>
          </div>
          <div className=" h-3 rounded border overflow-hidden border-slate-200">
            <div
              className=" h-full rounded-s bg-lime-500"
              style={{
                width: `${data.percentage}%`,
              }}
            ></div>
          </div>
        </div>
        <p className=" text-slate-600">{`${data.percentage}%`}</p>
      </div>
    </li>
  );
}

export default Bars;

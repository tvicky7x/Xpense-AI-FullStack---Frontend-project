import React from "react";
import DateList from "../List/DateList";
import { useNavigate } from "react-router-dom";

function CategoryDetails({ currentCategory, currentAccounts }) {
  const navigate = useNavigate();
  const set = new Set();
  currentAccounts.forEach((item) => {
    set.add(item.date);
  });
  const dateArray = Array.from(set);

  return (
    <>
      <div className="flex  items-center justify-start  border-b-2 border-b-slate-400 pb-1">
        <span className="material-symbols-outlined text-lime-500 text-3xl sm:text-4xl ms-1">
          {currentCategory.icon}
        </span>
        <div className="ms-2">
          <p className=" font-medium text-lg sm:text-xl ">
            {currentCategory.name}
          </p>
          <p className="-mt-1 text-sm sm:text-base text-slate-500">
            {currentCategory.isIncome ? "Income category" : "Expense category"}
          </p>
        </div>
        <button
          className=" ms-auto  flex"
          onClick={() => navigate("/categories")}
        >
          <span className="text-2xl sm:text-3xl material-symbols-outlined text-slate-400 text-opacity-80">
            close
          </span>
        </button>
      </div>

      <div className="mt-4">
        {dateArray.length === 0 && (
          <div className=" bg-lime-100 mt-4 rounded h-40 p-2 flex flex-col justify-center items-center text-sm text-lime-800 sm:text-base">
            <span className="material-symbols-outlined">quick_reference</span>
            <p className=" text-center">
              No record in this category. Tap{" "}
              <span className=" font-black">+</span> to add new record.
            </p>
          </div>
        )}
        {dateArray.map((date) => {
          return (
            <DateList
              date={date}
              key={date}
              list={currentAccounts.filter(
                (item) =>
                  new Date(item.date).getDate() === new Date(date).getDate()
              )}
            />
          );
        })}
      </div>
    </>
  );
}

export default CategoryDetails;

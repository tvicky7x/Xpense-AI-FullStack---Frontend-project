import React from "react";
import DateList from "./DateList";
import { useSelector } from "react-redux";
import Empty from "./Empty";

function ExpenseList() {
  // Redux
  const currentExpenseList = useSelector(
    (states) => states.account.currentExpenseList
  );
  const set = new Set();
  currentExpenseList.forEach((item) => {
    set.add(item.date);
  });
  const dateArray = Array.from(set);

  return (
    <>
      {dateArray.length === 0 && <Empty/>}
      {dateArray.map((date) => {
        return (
          <DateList
            date={date}
            key={date}
            list={currentExpenseList.filter((item) => {
              return new Date(item.date).getDate() === new Date(date).getDate();
            })}
          />
        );
      })}
    </>
  );
}

export default ExpenseList;

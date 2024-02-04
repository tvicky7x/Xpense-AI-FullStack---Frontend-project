import React from "react";
import { useDispatch } from "react-redux";
import { generalActions } from "../../Store/generalSlice";
import { accountActions } from "../../Store/accountSlice";
import IndianRupees from "../Tools/IndianRupees";

function ListItem({ accountForm }) {
  // Redux
  const dispatch = useDispatch();

  return (
    <>
      <li
        className="flex items-center py-2 px-1 text-slate-600 hover:bg-lime-100 sm:text-lg hover:rounded"
        onClick={() => {
          dispatch(generalActions.changeModelState());
          dispatch(accountActions.openAccountForm({ accountForm }));
          dispatch(
            accountActions.changeCategory({ category: accountForm.category })
          );
        }}
      >
        <span className="material-symbols-outlined text-lime-500">
          {accountForm.category.icon}
        </span>
        <p className="font-medium ms-1">{accountForm.category.name}</p>

        <IndianRupees
          className={
            !accountForm.isIncome
              ? "ms-auto font-medium text-red-500"
              : "ms-auto font-medium text-green-600"
          }
        >{`${accountForm.amount}`}</IndianRupees>
      </li>
    </>
  );
}

export default ListItem;

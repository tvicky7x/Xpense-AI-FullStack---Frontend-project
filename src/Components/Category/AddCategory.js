import React, { useRef, useState } from "react";
import Modal from "../Containers/Modal";
import ButtonPrimary from "../util/ButtonPrimary";
import ButtonSecondary from "../util/ButtonSecondary";
import { useDispatch, useSelector } from "react-redux";
import { generalActions } from "../../Store/generalSlice";
import InputField from "../util/InputField";
import ToggleButton from "../util/ToggleButton";
import { accountActions } from "../../Store/accountSlice";
import HeaderTitle from "../Containers/HeaderTitle";
import { openPopupComponent } from "../../Store/generalAction";
import axios from "axios";
import { Login } from "../../Store/authAction";

function AddExpense() {
  // // Redux
  const dispatch = useDispatch();
  const expenseCategories = useSelector(
    (states) => states.account.expenseCategories
  );
  const incomeCategories = useSelector(
    (states) => states.account.incomeCategories
  );

  //ref
  const nameRef = useRef();
  const iconRef = useRef();

  const [isIncome, setIsIncome] = useState(false);

  // alter isIncome
  function alterIsExpense() {
    setIsIncome(!isIncome);
  }

  return (
    <>
      <Modal
        onClick={() => {
          dispatch(generalActions.changeCategoryModelState());
        }}
      >
        <div className=" bg-white drop-shadow-lg rounded p-4 w-80 sm:w-96 category-modal">
          <div className=" relative">
            <button
              className=" absolute right-0 flex text-slate-400"
              onClick={() => {
                dispatch(generalActions.changeCategoryModelState());
              }}
            >
              <span className="text-3xl material-symbols-outlined">close</span>
            </button>
            <HeaderTitle title={"Add Category"} icon={"label"} />
          </div>

          <div className=" grid grid-cols-2 gap-2">
            <ToggleButton isActive={!isIncome} onClick={alterIsExpense}>
              Expense
            </ToggleButton>
            <ToggleButton isActive={isIncome} onClick={alterIsExpense}>
              Income
            </ToggleButton>
          </div>
          <div className=" my-3 text-slate-800">
            <form action="">
              <div className="mb-1 mt-2">
                {/* <DropDown
                  itemList={!isIncome ? expenseCategories : incomeCategories}
                /> */}
              </div>
              <InputField type={"text"} req={true} ref={nameRef} name={"name"}>
                Name
              </InputField>

              <ButtonPrimary type="submit" className="mt-5 w-full">
                Save Category
              </ButtonPrimary>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddExpense;

import React, { useRef, useState } from "react";
import Modal from "../Containers/Modal";
import ButtonPrimary from "../util/ButtonPrimary";
import ButtonSecondary from "../util/ButtonSecondary";
import DropDown from "./DropDown";
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
  const accountForm = useSelector((state) => state.account.accountForm);
  const expenseCategories = useSelector(
    (states) => states.account.expenseCategories
  );
  const incomeCategories = useSelector(
    (states) => states.account.incomeCategories
  );

  const categoryNow = useSelector((states) => states.account.category);

  // Ref
  const amountRef = useRef();
  const dataRef = useRef();
  const timeRef = useRef();
  const noteRef = useRef();

  const [isIncome, setIsIncome] = useState(accountForm.isIncome);

  // alter isIncome
  function alterIsExpense() {
    setIsIncome(!isIncome);
    dispatch(accountActions.resetCategory());
  }

  // Adding Expense Function
  async function addingExpense(e) {
    e.preventDefault();

    const amount = amountRef.current.value;
    const date = dataRef.current.value;
    const time = timeRef.current.value;
    const note = noteRef.current.value;
    const category = categoryNow;
    if (category.name !== "Categories") {
      const account = {
        isIncome,
        amount,
        category,
        date,
        time,
        note,
      };

      if (accountForm.id) {
        const result = await axios.patch(
          "/update-account",
          { ...account, id: accountForm.id },
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        if (result) {
          dispatch(generalActions.changeModelState());
          dispatch(accountActions.closeAccountForm());
        }
      } else {
        const result = await axios.post("/add-account", account, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        if (result) {
          dispatch(generalActions.changeModelState());
          dispatch(accountActions.closeAccountForm());
        }
      }
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(Login(token));
      }
    } else {
      dispatch(openPopupComponent("Please select category", true));
    }
  }
  // Deleting Edit Function
  async function deleteAccount(data) {
    const result = await axios.delete("/delete-account", {
      data,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (result) {
      dispatch(generalActions.changeModelState());
      dispatch(accountActions.closeAccountForm());
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(Login(token));
      }
    }
  }

  return (
    <>
      <Modal
        onClick={() => {
          dispatch(generalActions.changeModelState());
          dispatch(accountActions.closeAccountForm());
        }}
      >
        <div className=" bg-white drop-shadow-lg rounded p-4 w-80 sm:w-96">
          <div className=" relative">
            <button
              className=" absolute right-0 flex text-slate-400"
              onClick={() => {
                dispatch(generalActions.changeModelState());
                dispatch(accountActions.closeAccountForm());
              }}
            >
              <span className="text-3xl material-symbols-outlined">close</span>
            </button>
            <HeaderTitle
              title={isIncome ? "Add Expense" : "Add Income"}
              icon={isIncome ? "currency_rupee" : "account_balance_wallet"}
            />
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
            <form action="" onSubmit={addingExpense}>
              <div className="mb-1 mt-2">
                <DropDown
                  itemList={!isIncome ? expenseCategories : incomeCategories}
                />
              </div>
              <InputField
                type={"number"}
                req={true}
                ref={amountRef}
                name={"amount"}
                defaultValue={accountForm.amount}
              >
                Amount
              </InputField>

              <div className=" space-y-1 mb-1">
                <div className=" grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="" className="text-lg">
                      Date<span className=" text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      ref={dataRef}
                      defaultValue={accountForm.date.slice(0, 10)}
                      className=" outline-none w-full border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-lg">
                      Time<span className=" text-red-400">*</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      required
                      ref={timeRef}
                      defaultValue={accountForm.time}
                      className=" outline-none w-full border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                    />
                  </div>
                </div>
              </div>
              <div className=" space-y-1 mb-1">
                <label htmlFor="" className=" text-lg">
                  Add notes <span className=" text-slate-300">(optional)</span>
                </label>
                <textarea
                  className=" w-full border rounded border-lime-300 p-2  focus:ring-2 focus:ring-lime-400 focus:border-0"
                  name=""
                  id=""
                  rows="2"
                  ref={noteRef}
                  defaultValue={accountForm.note}
                  style={{ outline: "none" }}
                />
              </div>
              {!accountForm.id && (
                <div className=" mt-5">
                  <ButtonPrimary type="submit" className="w-full">
                    {!isIncome ? "Add Expense" : "Add Income"}
                  </ButtonPrimary>
                </div>
              )}

              {accountForm.id && (
                <div className=" mt-5 grid grid-cols-3 gap-x-2">
                  <ButtonSecondary
                    type="button"
                    className=" bg-red-500 text-red-50 hover:bg-red-600"
                    onClick={() => {
                      deleteAccount(accountForm);
                    }}
                  >
                    Delete
                  </ButtonSecondary>
                  <ButtonPrimary type="submit" className="w-full col-span-2">
                    {!isIncome ? "Save Expense" : "Save Income"}
                  </ButtonPrimary>
                </div>
              )}
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddExpense;

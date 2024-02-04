import React from "react";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";
import CategoryList from "../Components/Category/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { generalActions } from "../Store/generalSlice";
import MenuWrapper from "../MenuWrapper";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const expenseCategories = useSelector(
    (states) => states.account.expenseCategories
  );
  const incomeCategories = useSelector(
    (states) => states.account.incomeCategories
  );
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.general);

  const handleMenuClick = (buttonId) => {
    if (!menuState[buttonId]) {
      dispatch(generalActions.openMenu({ buttonId }));
    }
  };

  function navigateCategory(id) {
    navigate(`/categories/${id}`);
    dispatch(generalActions.closeMenu({ buttonId: id }));
  }

  return (
    <>
      <Container>
        <NormalCard>
          <div>
            <p className="text-slate-500 font-medium sm:text-lg border-b-2 border-b-slate-300">
              Income categories
            </p>
            <MenuWrapper>
              <ul>
                {incomeCategories.map((item, index) => {
                  return (
                    <CategoryList
                      key={index}
                      data={item}
                      active={menuState[item.id]}
                    >
                      <div className="ms-auto relative flex menu-button">
                        <span
                          className="material-symbols-outlined cursor-pointer text-slate-500  sm:p-1"
                          onClick={() => handleMenuClick(item.id)}
                        >
                          more_horiz
                        </span>
                        {menuState[item.id] && (
                          <div className=" absolute sm:right-8 right-5 top-5 sm:w-52 w-40 z-10 drop-shadow-md menu-component">
                            <NormalCard>
                              <p
                                className="py-1"
                                onClick={() => navigateCategory(item.id)}
                              >
                                Open
                              </p>
                              <p className="py-1">Edit</p>
                              <p className="py-1">Delete</p>
                            </NormalCard>
                          </div>
                        )}
                      </div>
                    </CategoryList>
                  );
                })}
              </ul>
            </MenuWrapper>
          </div>
          <div className="mt-4">
            <p className="text-slate-500 font-medium sm:text-lg border-b-2 border-b-slate-300">
              Expense categories
            </p>
            <MenuWrapper>
              <ul>
                {expenseCategories.map((item, index) => {
                  return (
                    <CategoryList
                      key={index}
                      data={item}
                      active={menuState[item.id]}
                    >
                      <div className="ms-auto relative flex menu-button">
                        <span
                          className="material-symbols-outlined cursor-pointer  text-slate-500 sm:p-1"
                          onClick={() => handleMenuClick(item.id)}
                        >
                          more_horiz
                        </span>
                        {menuState[item.id] && (
                          <div className=" absolute sm:right-8 right-5 top-5 sm:w-52 w-40 z-10 drop-shadow-md menu-component">
                            <NormalCard>
                              <p
                                className="py-1"
                                onClick={() => navigateCategory(item.id)}
                              >
                                Open
                              </p>
                              <p className="py-1">Edit</p>
                              <p className="py-1">Delete</p>
                            </NormalCard>
                          </div>
                        )}
                      </div>
                    </CategoryList>
                  );
                })}
              </ul>
            </MenuWrapper>
          </div>
        </NormalCard>
      </Container>
    </>
  );
}

export default Categories;

import React from "react";
import { categoriesIcon } from "../../Store/generalData";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../Store/accountSlice";

function CategoryIconContainer() {
  // redux
  const iconNow = useSelector((states) => states.account.icon);
  const dispatch = useDispatch();
  // appearance calculation
  const iconArrayHalfLength = new Array(
    Math.ceil(categoriesIcon.length / 2)
  ).fill(true);
  const upperCategoriesIcon = [];
  const lowerCategoriesIcon = [];
  categoriesIcon.forEach((item, index) => {
    if (index % 2 !== 0) {
      lowerCategoriesIcon.push(item);
    } else {
      upperCategoriesIcon.push(item);
    }
  });
  console.log(iconNow);
  return (
    <div className=" space-y-1">
      <p className="text-lg">
        Icon<span className=" text-red-400">*</span>
      </p>
      <div
        className={
          "overflow-auto overflow-y-hidden scroll border rounded border-lime-300 space-y-1"
        }
      >
        <div className=" flex gap-2 p-1.5">
          {iconArrayHalfLength.map((item, index) => {
            return (
              <>
                <div className="flex flex-col gap-2" key={`${index}`}>
                  <span
                    className={`${
                      upperCategoriesIcon[index] === iconNow &&
                      "bg-lime-200 text-lime-600"
                    }  rounded material-symbols-outlined text-2xl p-1 cursor-pointer`}
                    onClick={() =>
                      dispatch(
                        accountActions.changeIcon({
                          icon: upperCategoriesIcon[index],
                        })
                      )
                    }
                  >
                    {upperCategoriesIcon[index]}
                  </span>
                  <span
                    className={`${
                      lowerCategoriesIcon[index] === iconNow &&
                      "bg-lime-200 text-lime-600"
                    } material-symbols-outlined text-2xl p-1 cursor-pointer`}
                    onClick={() =>
                      dispatch(
                        accountActions.changeIcon({
                          icon: lowerCategoriesIcon[index],
                        })
                      )
                    }
                  >
                    {lowerCategoriesIcon[index]}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryIconContainer;

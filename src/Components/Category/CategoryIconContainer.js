import React from "react";
import { categoriesIcon } from "../../Store/generalData";

function CategoryIconContainer() {
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
        <div className=" flex gap-2 px-1.5">
          {iconArrayHalfLength.map((item, index) => {
            return (
              <>
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-2xl p-1 cursor-pointer">
                    {upperCategoriesIcon[index]}
                  </span>
                  <span className="material-symbols-outlined text-2xl p-1 cursor-pointer">
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

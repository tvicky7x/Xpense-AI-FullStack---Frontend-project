import React, { useEffect, useState } from "react";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import CategoryDetails from "../Components/Category/CategoryDetails";
import { useSelector } from "react-redux";

function CategoryPage() {
  const location = useLocation();
  const [currentCategory, setCategory] = useState({
    icon: "label",
    name: "Category",
  });

  const allExpenseList = useSelector((states) => states.account.allExpenseList);

  const categoryId = useParams().categoryId;
  const currentAccounts = allExpenseList.filter(
    (item) => item.category.id == categoryId
  );

  useEffect(() => {
    (async () => {
      const res = await axios.get(location.pathname, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setCategory(res.data.currentCategory);
    })();
  }, []);

  return (
    <>
      <Container>
        <NormalCard>
          <CategoryDetails
            currentAccounts={currentAccounts}
            currentCategory={currentCategory}
          />
        </NormalCard>
      </Container>
    </>
  );
}

export default CategoryPage;

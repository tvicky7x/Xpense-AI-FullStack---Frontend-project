import React from "react";
import Container from "../Containers/Container";
import NormalCard from "../Containers/NormalCard";
import SecondNavItem from "./SecondNavItem";

function SecondNavbar() {
  return (
    <>
      <Container>
        <NormalCard>
          <div className=" grid sm:grid-cols-4 divide-x-2 grid-cols-6">
            <SecondNavItem
              icon={"receipt_long"}
              path={"/records"}
              title={"Records"}
            />
            <SecondNavItem
              icon={"pie_chart"}
              path={"/analysis"}
              title={"Analysis"}
            />
            <SecondNavItem
              icon={"category"}
              path={"/categories"}
              title={"Categories"}
            />
            <SecondNavItem
              icon={"account_balance_wallet"}
              path={"/account"}
              title={"Account"}
            />
          </div>
        </NormalCard>
      </Container>
    </>
  );
}

export default SecondNavbar;

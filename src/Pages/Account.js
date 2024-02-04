import React from "react";
import AccountOverall from "../Components/Account/AccountOverall";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";

function Account() {
  return (
    <>
    <Container>
      <NormalCard>
         <AccountOverall />
      </NormalCard>
    </Container>
     
    </>
  );
}

export default Account;

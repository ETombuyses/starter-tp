import React from "react";
import styled from "styled-components";

import Button from "./components/atoms/buttons/Button"
import EsportButton from "./components/atoms/buttons/EsportButton"

// other way to import multiple elements from the same forlder:
// import { Button, EsportButton } from "./components/atoms/buttons/AllButtons"

const AppWrapper = styled.div`
  
`;

const App = () => {
  return (
    <AppWrapper>
      <Button secondary={true} text={'HELLO'}></Button>
      <Button text={'HELLO'}></Button>
      <EsportButton></EsportButton>
    </AppWrapper>
  );
};

export default App;

import React from "react";
import AddForm from "../components/AddForm";
import TodoListContainer from "../components/TodoListContainer";
import styled from "styled-components";

const HomePage = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default HomePage;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;

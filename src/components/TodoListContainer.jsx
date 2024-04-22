import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // handlers
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const onToggleHandler = (id) => {
    dispatch(toggleTodo({ id }));
  };

  // todoList, doneList
  const todoList = [];
  const doneList = [];
  todos.forEach((todo) => {
    if (todo.isDone) {
      doneList.push(todo);
    } else {
      todoList.push(todo);
    }
  });

  return (
    <>
      <h2>할 일</h2>
      <StTodos>
        {todoList.map((todo) => (
          <StTodo key={todo.id}>
            {todo.title}
            <StButtonContainer>
              <StButton color="green" onClick={() => onToggleHandler(todo.id)}>
                완료
              </StButton>
              <StButton color="red" onClick={() => onDeleteHandler(todo.id)}>
                삭제
              </StButton>
            </StButtonContainer>
          </StTodo>
        ))}
      </StTodos>
      <h2>완료한 일</h2>
      <StTodos>
        {doneList.map((todo) => (
          <StTodo key={todo.id}>
            {todo.title}
            <StButtonContainer>
              <StButton color="green" onClick={() => onToggleHandler(todo.id)}>
                취소
              </StButton>
              <StButton color="red" onClick={() => onDeleteHandler(todo.id)}>
                삭제
              </StButton>
            </StButtonContainer>
          </StTodo>
        ))}
      </StTodos>
    </>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;
const StButtonContainer = styled.section`
  display: flex;
  gap: 6px;
`;
const StButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 12px;
  padding: 6px 12px;
  ${(props) =>
    props.color === "green"
      ? "background-color: lightgreen;"
      : props.color === "red"
      ? "background-color: lightcoral;"
      : "background-color: #eee;"}
`;

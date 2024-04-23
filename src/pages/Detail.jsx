import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) =>
    state.todos.todos.find((todo) => todo.id === Number(id))
  );

  const onBackButtonHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>DetailPage</h1>
      <p>할일내용 : {todo.title}</p>
      <p>완료여부 : {todo.isDone.toString() ? "네" : "아니요"}</p>
      <button onClick={onBackButtonHandler}>메인페이지로</button>
    </div>
  );
};

export default DetailPage;

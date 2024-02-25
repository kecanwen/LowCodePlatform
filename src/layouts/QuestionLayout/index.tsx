import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const QuestionLayout: FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Outlet />
    </div>
  );
};

export default QuestionLayout;

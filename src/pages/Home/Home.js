import React from "react";
import ExpenseList from "../../components/expense-list/expense-list";
import TopFold from "../../components/TopFold/TopFold";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;

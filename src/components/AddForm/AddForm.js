import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { Categories } from "../../constants/expense-list";
import { addExpense } from "../../redux/actions/expenses-action";
import "./AddForm.css";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./sucess-modal";

const AddForm = () => {
  const categories = Categories;
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setAmount("");
      return;
    }
    setAmount(value);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoriesOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };

    dispatch(addExpense(data));
    setModalOpen(!modalOpen);
  };

  return (
    <div className="add-form">
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount</label>
        <input
          className="amount-input"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i className="fi-rr-angle-down"></i>
          </div>
          {categoriesOpen && (
            <div className="category-container">
              {categories.map((category) => (
                <div
                  className="category-item"
                  style={{
                    borderRight: `5px solid ${category.color}`,
                  }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} default alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i className="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;

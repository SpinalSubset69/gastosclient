import React, { useState } from "react";
import Spinner from "../spinner/Spinner";
import "./formcard.css";

const Formcard = ({ fetchPutExpense })=> {    
  const [isFetching, setIsFetching] = useState(false);

  const ExpenseForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const formAddExpenseSubmit = async (e) => {
      setIsFetching(true);
      e.preventDefault();
      const data = { title, description, amount }
      await fetchPutExpense(data);
      setIsFetching(false);
    };

    return (      
      <form
        onSubmit={formAddExpenseSubmit}
        className="formAddExpense"
        action=""
      >
        <h2>Agregar Gasto </h2>        
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="formInput"
          type="text"
          placeholder="Concepto..."
        />        
        <input
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="formInput"
          cols="45"
          placeholder="Descripcion..."
        />        
        <input
          required        
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="formInput"
          type="text"
          placeholder="Monto..."
        />
        <button type="submit" className="formButton">
          Agregar
        </button>
      </form>      
    );
  };

  return (
    <div className="formWrapper">
      {isFetching ? <Spinner message="Agregando gasto" /> : <ExpenseForm />}
    </div>
  );
}
export default Formcard;
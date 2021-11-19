import React, { useState } from "react";
import Spinner from "../spinner/Spinner";
import "./amountcard.css";

const AmountCard = ({ fetchAddAmount, fetchRemoveAmmount }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [ammount, setAmmount] = useState("");

  const handleAddAmountSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const data = { ammount };
    await fetchAddAmount(data);
    setIsFetching(false);
  };

  const handleRemoveAmmount = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    await fetchRemoveAmmount();
    setIsFetching(false);
  }

  return (
    <div className="cardWrapper">
      {isFetching ? (
        <Spinner message="Agregando monto" />
      ) : (
        <>
        <form onSubmit={handleAddAmountSubmit} className="amountForm" action="">
          <h2>Agregar monto a dinero inicial:</h2>
          <input
            required
            value={ammount}
            onChange={(e) => setAmmount(e.target.value)}
            className="formInput"
            type="text"
            placeholder="Monto..."
          />
          <button type="submit" className="formButton">
            Agregar
          </button>
        </form>
        <form onSubmit={handleRemoveAmmount} className="amountForm" action="">
        <h2>Reiniciar Dinero Inicial</h2>       
        <button type="submit" className="formButton">
          Reiniciar
        </button>
      </form>
      </>
      )}
    </div>
    
  );
}
export default AmountCard;
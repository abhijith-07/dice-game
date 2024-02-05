import { useEffect, useState } from "react";
import styles from "./DiceNumber.module.css";

export default function DiceNumber({ selectedNumber, setSelectedNumber, errorMessage, setErrorMessage }) {
  const diceNumber = [1, 2, 3, 4, 5, 6];

  function numberSelect(value) {
    setSelectedNumber(value)
    setErrorMessage("")
  }

  return (
    <div className={styles.numberContainer}>
      <div className={styles.errorMessage}>
        {errorMessage}
      </div>
      <div className={styles.diceNumber}>
        {diceNumber.map((value, i) => (
          <div
            className={styles.number}
            key={i}
            onClick={() => {
              numberSelect(value);
            }}
            style={
              selectedNumber === value
                ? { background: "black", color: "white" }
                : { background: "transparent", color: "black" }
            }
          >
            {value}
          </div>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
}

import { useState } from "react";
import "./Calculation.css";

export const Calculation: React.FC = () => {
  /* Some state variables to store the user's input and the result of the calculation */
  const [sideA, setSideA] = useState<number>(0);
  const [sideB, setSideB] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  //Function to store sideA and sideB when the input boxes change
  const storeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    //If the name of the changed input is "SideA", then store SideA
    //Otherwise, store SideB
    if (event.target.name === "SideA") {
      setSideA(Number(event.target.value)); //the value is a String, so we parse to an int
    } else {
      setSideB(Number(event.target.value));
    }

    //"event" is the entire onChange event object, which stores our input element, which stores the value we need
    //"target" is the Input element we triggered
  };

  //Function to do the calculation and store it in the result state variable
  const calculateResult = () =>{
    const result = Math.hypot(sideA, sideB)
    setResult(result)
    
  }

  return (
    <div className="input-container">
      <h3>Calculation Component</h3>

      <input type="number" name="SideA" onChange={storeValues} />
      <input type="number" name="SideB" onChange={storeValues} />

      {/* Conditional Rendering! If SideA OR SideB are <= 0 render a message telling the user to input valid values */}
      <p style={{ color: "red", fontWeight: "bold" }}>
        {/* Are SideA or SideB 0 or less? if so, render a message. otherwise render nothing */}
        {sideA <= 0 || sideB <= 0
          ? "Please enter a valid value for both sides"
          : ""}
      </p>

      <p>{result ? "You Calculated:  " + result : ""}</p>
      
      <button onClick={calculateResult}>Calculate!</button>
    </div>
  );
};
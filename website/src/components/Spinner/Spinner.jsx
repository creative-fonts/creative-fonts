import React from "react";
import { Circles } from "react-loader-spinner";
import "./Spinner.css";

const Spinner = ({ message }) => {
  return (
    <div className="spinner">
      <Circles color="rgb(70, 198, 248)" height={50} width={200} />
      <p className="loading">{message}</p>
    </div>
  );
};

export default Spinner;

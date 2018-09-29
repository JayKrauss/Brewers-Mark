import React from "react";
import "./Icons.css";

const Icons = ({ src, index, name, styling, handleClick }) => (
        <img data-id={index} className={styling} src={src} alt={name} onClick={handleClick} />
);

export default Icons;

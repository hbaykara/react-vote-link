import React from 'react';
import { useFormContext } from "react-hook-form";
import './Input.scss'

const Input = ({ label, name, ...props }) => {
 const methods = useFormContext();

  return (
    <div className="form-group">
      { label && <label>{label}</label> }
      <input {...props} {...methods.register(name)} />
    </div>
  );
};

export default Input;

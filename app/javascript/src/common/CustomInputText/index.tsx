/* eslint-disable import/exports-last */

import React from "react";

export const CustomInputText = ({
  id,
  inputBoxClassName,
  dataCy,
  disabled,
  name,
  type,
  value,
  onChange,
  labelClassName,
  label,
  wrapperClassName,
}) => (
  <div className={wrapperClassName}>
    <input
      className={inputBoxClassName}
      data-cy={dataCy}
      disabled={disabled}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
    <label className={labelClassName} htmlFor={name}>
      {label}
    </label>
  </div>
);

CustomInputText.defaultProps = {
  inputBoxClassName:
    "form__input block w-full appearance-none bg-white p-4 text-base h-12 border-miru-gray-1000",
  type: "text",
  labelClassName:
    "absolute top-0 z-1 origin-0 bg-white p-3 text-base font-medium text-miru-dark-purple-200 duration-300",
  wrapperClassName: "outline relative h-12",
  disabled: false,
};
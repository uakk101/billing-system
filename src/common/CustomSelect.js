import React from "react";

function CustomSelect({
  children,
  label,
  labelClass,
  extraClass,
  required,
  ...props
}) {
  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label
            for="name"
            className={`${labelClass ? labelClass : "text-gray-700"} ${
              required && "required"
            }`}
          >
            {label}
          </label>
        )}
        <select
          className={`p-[0.4rem] border-[#B9B9B9] focus:shadow-md !shadow-primaryColor/10 focus:border-primaryColor border  text-base focus:outline-none focus:ring-0 disabled:bg-[#EAEEF4] disabled:opacity-100  rounded text-gray-900 ${extraClass}`}
          {...props}
        >
          {children}
        </select>
      </div>
    </>
  );
}

export default CustomSelect;

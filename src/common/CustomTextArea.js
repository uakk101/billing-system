import React from "react";

function CustomTextarea({ label, required, labelClass, ...inputProps }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label for="name" className={`${labelClass ? labelClass : `text-gray-700 ${required ? "required" : ""}`}`}>
          {label}
        </label>
      )}
      <textarea
        {...inputProps}
        className=" p-[0.4rem] focus:shadow-md !shadow-primaryColor/10 focus:border-primaryColor border border-gray-300 disabled:bg-gray-300  focus:outline-none focus:ring-0  rounded text-gray-900"
      />
    </div>
  );
}

export default CustomTextarea;

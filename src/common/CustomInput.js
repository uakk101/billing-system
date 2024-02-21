import React, { useState } from "react";
 
import handleNumericCheck from "../Utils/NumericCheck";
import moment from "moment-mini";
import { AiOutlineEyeInvisible } from 'react-icons/ai';

function CustomInput({
  label,
  required,
  labelClass,
  maxFloat,
  isNumeric,
  isFloat,
  extraClass,
  type,
  SuffixIcon,
  onKeyPress,
  onChange,
  PrefixIcon,
  SuffixIconClass,
  name,
  ...inputProps
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex flex-col w-full">
      {label && (
        <label
          className={`${labelClass ? labelClass : "text-secondary text-sm"} ${
            required && " required"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative flex w-full">
        {SuffixIcon && (
          <SuffixIcon
            className={`absolute text-primaryColor text-2xl left-[.3rem] top-1/2 -translate-y-1/2 ${SuffixIconClass}`}
          />
        )}
        <input
          type={showPassword ? "text" : type}
          onPaste={
            type === "date"
              ? (e) => {
                  const pastedDate = e.clipboardData.getData("text/plain");
                  let trimeddate = pastedDate.trim();
                  const formattedDate = moment(trimeddate).format("YYYY-MM-DD");
                  onChange({ target: { value: formattedDate, name: name } });
                }
              : () => {}
          }
          onKeyPress={
            isNumeric
              ? (e) => {
                  handleNumericCheck(e, isFloat ? "allowFloat" : "", maxFloat);

                  if (onKeyPress) {
                    onKeyPress(e);
                  }
                }
              : onKeyPress
              ? onKeyPress
              : () => {}
          }
          onInput={
            type === "date"
              ? () => {}
              : (e) => (e.target.value = ("" + e.target.value).toUpperCase())
          }
          {...inputProps}
          name={name}
          onChange={onChange}
          className={` p-[0.4rem] py-[.3rem] w-full focus:shadow-md !shadow-primaryColor/10 focus:border-primaryColor border border-[#B9B9B9] text-base focus:outline-none focus:ring-0  rounded text-gray-900  disabled:bg-[#EAEEF4] ${extraClass}
        
        
        ${PrefixIcon && "pr-8 "}
        ${SuffixIcon && "pl-8 "}
        `}
        />

        {PrefixIcon && (
          <PrefixIcon className="absolute text-primaryColor text-2xl right-[.3rem] top-1/2 -translate-y-1/2" />
        )}
      </div>
      {type === "password" && (
        <AiOutlineEyeInvisible
          className={`absolute text-primaryColor ${
            !showPassword ? "opacity-50" : "opacity-100"
          } right-2 top-1/2 cursor-pointer`}
          onClick={() => setShowPassword(!showPassword)}
          size={23}
        />
      )}
    </div>
  );
}

export default CustomInput;

import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
// import Validator, { ValidationTypes as V_Type, } from 'react-form-supervalidator';
import "./Billing.css";
import axios from "axios";

const Billing = () => {
  const data = [
    "مغل گارڈر.",
    "کراس پائپ18G",
    "سی۔چینل",
    "بیس پلیٹ(5mm)8×8",
    "راول بولٹ",
    "نٹ بولٹGI",
    "کٹر ڈسک",
    "ویلڈنگ راڈ",
    "بلیک پینٹ",
    "سپرے پینٹ",
    "ایپوکسی",
    "نکے",
    "ملی ڈسک",
    "اینگل۔",
    "ٹاپ پلیٹ",
  ];


  //   const setValidation = () => {
  //     let validation_Obj = {
  //         ...validationModel,
  //         // nameError: Validator(model.name, [V_Type.required], ['name is required'],),
  //     }
  //     setValidationModel(validation_Obj)
  //     return Validator(validation_Obj, V_Type.NullCheck);
  // }

  const [inputValues, setInputValues] = useState({});
  const handleChange = (inputNumber, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputNumber]: value,
    }));
    calculateResult();
  };

  const calculateResult = () => {
    const num1 = parseFloat(inputValues[1]) || 0;
    const num2 = parseFloat(inputValues[2]) || 0;
    const num3 = parseFloat(inputValues[3]) || 0;

    const multiplicationResult = num1 * num2;
    const finalResult = multiplicationResult * num3;

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      result: multiplicationResult,
      result2: finalResult,
    }));
  };



  const handleInputChange = (name, value) => {
    if (name === "datePicker") {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        date: value,
      }));
    } else if (name.includes("_1") || name.includes("_2")) {
      const baseItem = name.replace(/_[12]/, "");
      const value1 = parseFloat(inputValues[`${baseItem}_1`] || 0);
      const value2 = parseFloat(inputValues[`${baseItem}_2`] || 0);

      if (!isNaN(value1) && !isNaN(value2)) {
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          result1: {
            ...prevInputValues.result1,
            [baseItem]: value1 * value2,
          },
        }));
      }
    } else {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [name]: value,
      }));
    }
  };

  const handleClearAll = () => {
    setInputValues({});
  };


  const handleSave = () => {
    
    const items = data.map((item) => ({
      name: item,
      quantity: parseFloat(inputValues[`${item}_1`] || 0),
      price: parseFloat(inputValues[`${item}_2`] || 0),
      result: parseFloat(
        (inputValues[`${item}_1`] || 0) * (inputValues[`${item}_2`] || 0)
      ),
    }));

    const panelInstallationStructure = {
      quantity1: parseFloat(inputValues[1]) || 0,
      quantity2: parseFloat(inputValues[2]) || 0,
      pricePerUnit: parseFloat(inputValues[3]) || 0,
      total: parseFloat(inputValues[1] || 0) * parseFloat(inputValues[2] || 0),
      grandTotal:
        parseFloat(inputValues[1] * inputValues[2]) * parseFloat(inputValues[3]) || 0,
    };

    const payload = {
      items,
      panelInstallationStructure,
      date: inputValues.date,
    };

    axios.post(`${process.env.REACT_APP_URL}/api/save`, payload)
      .then((response) => {
 
      })
      .catch((error) => {
 
      });
  };


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center p-2 mt-2 mb-2 border border-gray-400 rounded-md shadow-md ">
        <h1 className="w-full">Select the date</h1>
        <CustomInput type="date" name="datePicker" onChange={(e) => handleInputChange("datePicker", e.target.value)} />
      </div>
      <div className="rtl-container">
        <div className="grid grid-flow-row grid-cols-5 gap-2 p-4 border-4 border-gray-600 rounded-lg shadow-lg">
          {data.map((item, index) => (
            <div key={index} className="col-span-5">
              <div className="flex flex-row items-center justify-center mr-2">
                <span className="m-2 w-[400px] ">{item}</span>
                <span className="text-2xl">=</span>
                <CustomInput
                  type="number"
                  value={inputValues[`${item}_1`] || ""}
                  onChange={(e) => handleInputChange(`${item}_1`, e.target.value)}
                />
                <CustomInput
                  type="number"
                  value={inputValues[`${item}_2`] || ""}
                  onChange={(e) => handleInputChange(`${item}_2`, e.target.value)}
                />
                <h1 className="w-full">
                  {`= ${(inputValues[`${item}_1`] && inputValues[`${item}_2`]) ||
                    (inputValues.result1 && inputValues.result1[item])
                    ? (inputValues[`${item}_1`] || 0) *
                    (inputValues[`${item}_2`] || 0) ||
                    inputValues.result1[item]
                    : ""
                    }`}
                </h1>
              </div>
            </div>
          ))}

          <div className="flex flex-row col-span-5">
            <h1 className="w-[150px] mt-1">پینل انسٹال سٹریکچر</h1>
            <div className="flex flex-row items-center justify-center">
              <span className="text-2xl">=</span>
              <CustomInput
                type="number"
                value={inputValues[1] || ""}
                onChange={(e) => handleChange(1, e.target.value)}

              />
              <CustomInput
                type="number"
                value={inputValues[2] || ""}
                onChange={(e) => handleChange(2, e.target.value)}

              />
              <span className="pl-2 text-2xl">=</span>
              <h1 className="w-20 font-bold">{(inputValues[1] * inputValues[2]) || 0}</h1>
              <CustomInput
                type="number"
                value={inputValues[3] || ""}
                onChange={(e) => handleChange(3, e.target.value)}

              />
              <span className="pl-2 text-2xl">=</span>
              <h1 className="font-bold w-25">{((inputValues[1] * inputValues[2]) * inputValues[3]) || 0} </h1>
            </div>
          </div>

          <div className="col-span-5">
            <div className="flex flex-row items-center justify-end mr-2">
              <button
                className="p-1 text-sm text-white transition-all bg-red-500 border rounded-md shadow-xl hover:bg-red-400"
                onClick={handleClearAll}
              >
                Clear All
              </button>
              <button
                className="p-1 mr-2 text-sm text-white transition-all bg-green-500 border rounded-md shadow-xl hover:bg-green-600"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Billing;

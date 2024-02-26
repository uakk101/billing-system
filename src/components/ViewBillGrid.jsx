import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";

export const ViewBillGrid = ({ searchResults }) => {
  const [activeAccordion, setActiveAccordion] = useState(false);

  const handleClick = () => {
    setActiveAccordion(!activeAccordion);
  };
  console.log("show searchResults", searchResults)
  const renderGrid = () => {
    if (!searchResults) return null;

    return searchResults.map((result, index) => (
      <div
        key={index}
        className="p-2 mx-8 border border-gray-400 rounded-md shadow-md mb-4"
      >
        <div className="flex items-center justify-between ">
          <div className="flex">
            <h1 className="text-[#0C7F80] p-2 font-semibold">
              {result.companyName}
            </h1>
            <h1 className="text-[#0C7F80] p-2 font-semibold">{result.date}</h1>
          </div>

          {activeAccordion ? (
            <BiSolidChevronUp
              className="w-6 mr-3 cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <BiSolidChevronDown
              className="w-6 mr-3 cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
        {activeAccordion && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F5F5]">
                <tr className="text-lg">
                  <th className="text-left">Name</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(result).map((key, index) => {
                  if (key.endsWith("Q")) {
                    const name = key.slice(0, -1); // Remove the last character 'Q'
                    const quantity = result[key];
                    const price = result[`${name}P`];
                    const total = result[`${name}T`];

                    return (
                      <tr key={index}>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{total}</td>
                      </tr>

                    );
                  }
                  return null;
                })}
                <tr >
                  <td colSpan={3}></td>

                  <td className="font-bold text-xl text-green-600">{result.total}</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full mb-4 text-sm">
              <thead className="bg-[#F5F5F5]">
                <tr className="text-base">
                  <th className="text-left">Name</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Total</th>
                  <th className="text-left">Total</th>
                  <th className="text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PanelInstall Structure</td>
                  <td>{result.panelInstallStructureQ}</td>
                  <td>{result.panelInstallStructureP}</td>
                  <td>{result.panelInstallStructureG}</td>
                  <td>{result.panelInstallStructureST}</td>
                  <td>{result.panelInstallStructureGT}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    ));
  };

  return <>{renderGrid()}</>;
};

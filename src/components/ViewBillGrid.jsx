import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import CustomButton from "../common/CustomButton";
import ConfirmationPopup from "../popups/ConfirmationPopup/ConfirmationPopup";
import axios from "axios";
import { toast } from "react-toastify";
import GenerateBillPopup from "../popups/create-billl-poup/GenerateBillPopup";

export const ViewBillGrid = ({ searchResults, fetchData, profit, startData }) => {
  const [activeAccordion, setActiveAccordion] = useState(false);
  const [newBillPopup, setNewBillPopup] = useState(false);
  const [newDeletePopup, setDeletePopup] = useState(false);
  const [billId, setBillId] = useState();
  // const handleClick = () => {
  //   setActiveAccordion(!activeAccordion);
  // };

  const handleClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const onOpenPopup = (id) => {
    setBillId(id);
    setNewBillPopup(true);
  };

  const onClosePopup = () => {
    setNewBillPopup(false);
  };
  const openDeletePopup = (id) => {
    setBillId(id);
    setDeletePopup(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const closeDeletePopup = (e, isSaved) => {
    // fetchData();
    setDeletePopup(false);
  };

  const handleDownloadPDF = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/downloadPDF/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `billing_${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_URL}/api/delete/${billId}`
      );
      const data = response.data;
      if (data.success) {
        toast.success("Deleted Successfully");
        fetchData();
        // Handle any additional logic or UI updates after successful deletion
      } else {
        console.error("Error deleting data:", data.message);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
    setDeletePopup(false);
  };

  const renderGrid = () => {
    if (!searchResults) return null;
    const sortedResults = searchResults.length === 0 ? startData : searchResults.slice().sort((a, b) => a.billNo - b.billNo);

    return sortedResults.map((result, index) => (
      <div
        key={index}
        id={`billGrid-${index}`}
        className="p-2 mx-8 mb-4 border border-gray-400 rounded-md shadow-md"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-[#0C7F80] font-semibold">
              <span className="font-semibold text-black">Bill No: </span>
              {result.billNo}
            </h1>
            <h1 className="text-[#0C7F80] font-semibold">
              <span className="font-semibold text-black">Date: </span>
              {formatDate(result.date)}
            </h1>
            <h1 className="font-semibold text-green-700">
              <span className="font-semibold text-black">Customer Name: </span>
              {result.customerName}
            </h1>
            <h1 className="font-semibold text-red-600">
              <span className="font-semibold text-black">Technition: </span>
              {result.technition}
            </h1>
            <h1 className="text-[#0C7F80] text-sm truncate overflow-hidden whitespace-nowrap w-[300px]">
              <span className="font-semibold text-black">Address: </span>
              {result.address}
            </h1>
          </div>
          <h1 className="text-[#0C7F80]  font-semibold">
            {result.companyName}
          </h1>

          <div className="flex items-center gap-2">
            <CustomButton
              onClick={() => handleDownloadPDF(result._id)}
              type={"secondary"}
              text={"Download"}
            />
            <CustomButton
              onClick={() => onOpenPopup(result._id)}
              type={"outline"}
              text={"Update"}
            />

            <CustomButton
              onClick={() => openDeletePopup(result._id)}
              type={"primary"}
              text={"Delete"}
            />
            {activeAccordion === index ? (
              <BiSolidChevronUp
                className="w-6 cursor-pointer"
                onClick={() => handleClick(index)}
              />
            ) : (
              <BiSolidChevronDown
                className="w-6 cursor-pointer"
                onClick={() => handleClick(index)}
              />
            )}
          </div>
        </div>
        {activeAccordion === index ? (
          <div
            className={`relative mt-2 overflow-y-auto h-0 transition-all duration-500 ${activeAccordion === index ? " h-[475px]" : ""
              }`}
          >
            <table className="w-full text-sm">
              <thead className="bg-[#F5F5F5] w-full">
                <tr className="text-lg ">
                  <th colSpan={3} className="text-left">
                    Name
                  </th>
                  <th colSpan={1} className="text-right ">
                    Quantity
                  </th>
                  <th colSpan={1} className="text-right ">
                    Price
                  </th>
                  <th colSpan={1} className="text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(result).map((key, index) => {
                  if (key.endsWith("Q") && key !== "panelInstallStructureQ") {
                    const name = key.replace(/Q$/, ""); // Remove the 'Q' at the end of the key
                    const quantity = result[key];
                    const price = result[`${name}P`];
                    const total = result[`${name}T`];

                    return (
                      <tr key={index}>
                        <td colSpan={3}>{result[name]}</td>
                        <td className="pr-8 text-right" colSpan={1}>
                          {quantity}
                        </td>
                        <td className="pr-4 text-right" colSpan={1}>
                          {price}
                        </td>
                        <td className="text-center" colSpan={1}>
                          {total}
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}

                <tr className="border-t">
                  <td
                    colSpan={3}
                    className="text-xl font-bold text-right "
                  ></td>
                  <td
                    colSpan={3}
                    className="pr-32 text-xl font-bold text-right text-red-800"
                  >
                    {result.total}
                  </td>
                </tr>
              </tbody>
            </table>

            {result.panelInstallStructure &&
              result.panelInstallStructure.length > 0 ? (
              <table className="w-full mb-4 text-sm">
                <thead className="bg-[#F5F5F5]">
                  <tr className="text-base">
                    <th className="text-left">Name</th>
                    <th className="text-left">Watts</th>
                    <th className="text-left">Quantity(Panel)</th>
                    <th className="text-left">Total Watt</th>
                    <th className="text-left">Price Per watt</th>
                    <th className="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render panelInstallStructure data */}
                  {result.panelInstallStructure.map((item, i) => (
                    <tr key={i}>
                      <td>PanelInstall Structure</td>
                      <td>{item.panelInstallStructure1}</td>
                      <td>{item.panelInstallStructureP}</td>
                      <td>{item.panelInstallStructureST}</td>
                      <td>{item.panelInstallStructureG}</td>
                      <td className="text-xl font-bold text-green-600">
                        {item.panelInstallStructureGT}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody>
                  <tr>
                    <td>Total</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td className="text-xl font-bold text-green-600">
                      {result.panelInstallStructureTotal}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="w-full mb-4 text-sm">
                <thead className="bg-[#F5F5F5]">
                  <tr className="text-base">
                    <th className="text-left">Name</th>
                    <th className="text-left">Watts</th>
                    <th className="text-left">Quantity(Panel)</th>
                    <th className="text-left">Total Watt</th>
                    <th className="text-left">Price Per watt</th>
                    <th className="text-left">Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>PanelInstall Structure</td>
                    <td>{result?.panelInstallStructure1}</td>
                    <td>{result?.panelInstallStructureP}</td>
                    <td>{result?.panelInstallStructureST}</td>
                    <td>{result?.panelInstallStructureG}</td>
                    <td className="text-xl font-bold text-green-600">
                      {result?.panelInstallStructureGT}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <table className="w-full mb-4 text-sm">
              <thead className="bg-[#F5F5F5]">
                <tr className="text-base">
                  <th className="text-left">Name</th>
                  <th className="text-left">Reason</th>
                  <th className="text-left"></th>
                  <th className="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Other Expenses</td>
                  <td>{result.reason}</td>
                  <td> </td>
                  <td className="text-xl font-bold text-green-600">
                    {result.otherExpenses}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    ));
  };

  return (
    <div>
      {newBillPopup && (
        // <CreateBillPopup
        //   fetchData={fetchData}
        //   onClose={onClosePopup}
        //   billID={billId}
        // />
        <GenerateBillPopup
          fetchData={fetchData}
          onClose={onClosePopup}
          billID={billId}
        />
      )}
      {newDeletePopup && (
        <ConfirmationPopup
          onConfirm={handleDelete}
          onCancel={closeDeletePopup}
        />
      )}
      <div className="flex justify-end gap-4 mr-8">
        <h1 className="text-xl font-bold">
          Total Bills Displayed:
          <span className="text-xl font-bold text-red-700">
            {searchResults?.length || 0}  {/* Total count of bills */}
          </span>
        </h1>
        <h1 className="text-xl font-bold">
          Total Technician Payment :
          <span className="text-xl font-bold text-red-700">
            {profit.totalRateTimesST}
          </span>
        </h1>
        <h1 className="text-xl font-bold">
          Total Site Expense :
          <span className="text-xl font-bold text-red-700">
            {profit.totalAmount}
          </span>
        </h1>
        <h1 className="text-xl font-bold">
          Total Site Income :
          <span className="text-xl font-bold text-green-700">
            {profit.totalPanelStructureTotal}
          </span>
        </h1>
      </div>
      {renderGrid()}
    </div>
  );
};

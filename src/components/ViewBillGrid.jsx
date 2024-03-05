import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import CustomButton from "../common/CustomButton";
import CreateBillPopup from "../popups/create-billl-poup/CreateBillPopup";
import ConfirmationPopup from "../popups/ConfirmationPopup/ConfirmationPopup";
import axios from "axios";
import { toast } from "react-toastify";

export const ViewBillGrid = ({ searchResults, fetchData }) => {
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

  const onClosePopup = (e, isSaved) => {
    setNewBillPopup(false);
  };
  const openDeletePopup = (id) => {
    setBillId(id);
    setDeletePopup(true);
  };

  const closeDeletePopup = (e, isSaved) => {
    // console.log("This is deleted")
    // fetchData();
    setDeletePopup(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/delete/${billId}`
      );
      const data = response.data;
      if (data.success) {
        console.log("Successfully deleted data:", data.message);
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

    return searchResults.map((result, index) => (
      <div
        key={index}
        className="p-2 mx-8 mb-4 border border-gray-400 rounded-md shadow-md"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-[#0C7F80] font-semibold"><span className="font-semibold text-black">Date: </span>{result.date}</h1>
            <h1 className="text-red-600 font-semibold"><span className="font-semibold text-black">Technition: </span>{result.technition}</h1>
            <h1 className="text-[#0C7F80] text-sm "><span className="font-semibold text-black">Address: </span>{result.address}</h1>
          </div>
          <h1 className="text-[#0C7F80]  font-semibold">
            {result.companyName}
          </h1>

          <div className="flex items-center gap-2">
            <CustomButton
              onClick={() => onOpenPopup(result._id)}
              type={"outline"}
              text={"Update"}
            />
            <CustomButton
              onClick={() => openDeletePopup(result._id)}
              type={"delete"}
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
            className={`relative mt-2 overflow-y-auto h-0 transition-all duration-500 ${activeAccordion === index ? " h-[475px]" : ""}`}
          >
            <table className="w-full text-sm">
              <thead className="bg-[#F5F5F5] w-full">
                <tr className="text-lg ">
                  <th colSpan={3} className="text-left">Name</th>
                  <th colSpan={1} className="text-right ">Quantity</th>
                  <th colSpan={1} className="text-right ">Price</th>
                  <th colSpan={1} className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(result).map((key, index) => {
                  if (key.endsWith("Q") && key !== "panelInstallStructureQ") {
                    const name = key.slice(0, -1); // Remove the last character 'Q'
                    const quantity = result[key];
                    const price = result[`${name}P`];
                    const total = result[`${name}T`];

                    return (
                      <tr key={index}>
                        {name === "mughalGarder" && <td colSpan={3}>Mughal Garder</td>}
                        {name === "crossPipe" && <td colSpan={3}>Cross Pipe</td>}
                        {name === "cChannel" && <td colSpan={3}>C Channel</td>}
                        {name === "basePlate" && <td colSpan={3}>Base Plate</td>}
                        {name === "rawalBolt" && <td colSpan={3}>Rawal Bol</td>}
                        {name === "nutBolt" && <td colSpan={3}>Nut Bolt</td>}
                        {name === "cutterDisk" && <td colSpan={3}>Cutter Disk</td>}
                        {name === "weldingRod" && <td colSpan={3}>Welding Rod</td>}
                        {name === "blackPaint" && <td colSpan={3}>Black Paint</td>}
                        {name === "sprayPaint" && <td colSpan={3}>Spray Paint</td>}
                        {name === "epoxy" && <td colSpan={3}>Epoxy</td>}
                        {name === "nakky" && <td colSpan={3}>Nakky</td>}
                        {name === "miliDisk" && <td colSpan={3}>Mili Disk</td>}
                        {name === "angel" && <td colSpan={3}>Angel</td>}
                        {name === "topPlate" && <td colSpan={3}>Top Plate</td>}
                        <td className="text-right pr-8" colSpan={1} >{quantity}</td>
                        <td className="text-right pr-4" colSpan={1} >{price}</td>
                        <td className="text-center" colSpan={1}>{total}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
                <tr className="border-t">
                  <td colSpan={3} className="text-xl font-bold  text-right "> </td>
                  <td colSpan={3} className="text-right text-xl font-bold text-red-800 pr-32">
                    {result.total}
                  </td>
                </tr>
              </tbody>
            </table>
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
                  <td>{result.panelInstallStructureQ}</td>
                  <td>{result.panelInstallStructureP}</td>
                  <td>{result.panelInstallStructureST}</td>
                  <td>{result.panelInstallStructureG}</td>
                  <td className="text-xl font-bold text-green-600">{result.panelInstallStructureGT}</td>
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
        <CreateBillPopup onClose={onClosePopup} billID={billId} />
      )}
      {newDeletePopup && (
        <ConfirmationPopup
          onConfirm={handleDelete}
          onCancel={closeDeletePopup}

        />
      )}
      {renderGrid()}
    </div>
  );
};

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
        <div className="flex items-center justify-between">
          <div className="flex justify-between gap-2">
            <h1 className="text-[#0C7F80]  font-semibold">
              {result.companyName}
            </h1>
            <h1 className="text-[#0C7F80] font-semibold">{result.date}</h1>
            <h1 className="text-[#0C7F80] font-semibold">{result.address}</h1>
            <h1 className="text-[#0C7F80] font-semibold">{result.technition}</h1>
          </div>

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
            className={`relative mt-2 overflow-y-auto h-0 transition-all duration-500 ${
              activeAccordion === index ? " h-[475px]" : ""
            }`}
          >
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
                        {name === "mughalGarder" && <td>Mughal Garder</td>}
                        {name === "crossPipe" && <td>Cross Pipe</td>}
                        {name === "cChannel" && <td>C Channel</td>}
                        {name === "basePlate" && <td>Base Plate</td>}
                        {name === "rawalBolt" && <td>Rawal Bol</td>}
                        {name === "nutBolt" && <td>Nut Bolt</td>}
                        {name === "cutterDisk" && <td>Cutter Disk</td>}
                        {name === "weldingRod" && <td>Welding Rod</td>}
                        {name === "blackPaint" && <td>Black Paint</td>}
                        {name === "sprayPaint" && <td>Spray Paint</td>}
                        {name === "epoxy" && <td>Epoxy</td>}
                        {name === "nakky" && <td>Nakky</td>}
                        {name === "miliDisk" && <td>Mili Disk</td>}
                        {name === "angel" && <td>Angel</td>}
                        {name === "topPlate" && <td>Top Plate</td>}
                        {name === "panelInstallStructure" && (
                          <td>Panel Install Structure</td>
                        )}
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{total}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
                <tr>
                  <td colSpan={3}></td>
                  <td className="text-xl font-bold text-green-600">
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
                  <td>{result.panelInstallStructureGT}</td>
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

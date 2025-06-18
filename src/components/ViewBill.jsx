import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import CustomButton from "../common/CustomButton";

import axios from "axios";
import { ViewBillGrid } from "./ViewBillGrid";
import { toast } from "react-toastify";
import GenerateBillPopup from "../popups/create-billl-poup/GenerateBillPopup";

export const ViewBill = () => {
  const [searchQuery, setSearchQuery] = useState({
    companyName: "",
    technition: "",
    startDate: "",
    endDate: "",
  });

  const [newBillPopup, setNewBillPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [startData, setStartData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [profit, setProfit] = useState({
    totalAmount: 0,
    totalPanelStructureTotal: 0,
    totalRateTimesST: 0,
  });

  // Effect to disable body scroll when popup is open
  useEffect(() => {
    if (newBillPopup) {
      // Disable scrolling on body
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on body
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [newBillPopup]);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSearch = () => {
    const { companyName, technition, startDate, endDate } = searchQuery;

    // Check if all search fields are empty
    const isEmptySearch = Object.values(searchQuery).every(value => value === "");

    // Check if only one of the dates is provided
    const isStartDateMissing = !startDate && endDate;
    const isEndDateMissing = startDate && !endDate;

    if (isEmptySearch) {
      setSearchResults([])

      fetchData();
    } else if (isStartDateMissing) {
      // If only start date is missing
      toast.error("Start date is required.");
    } else if (isEndDateMissing) {
      // If only end date is missing
      toast.error("End date is required.");
    } else {
      // Otherwise, proceed with searching
      setIsLoading(true);
      axios
        .post(`${process.env.REACT_APP_URL}/api/search`, {
          companyName: companyName.toUpperCase(),
          technition: technition.toUpperCase(),
          startDate,
          endDate,
        })
        .then((response) => {
          const data = response.data;
          if (data.success) {
            setSearchResults(data.data);
            setProfit({
              totalAmount: data.totalAmount,
              totalPanelStructureTotal: data.totalPanelStructureTotal,
              totalRateTimesST: data.totalRateTimesST,
            });

          } else {
            console.error("Error searching data:", data.message);
          }
        })
        .catch((error) => {
          toast.error("Data not found");
          console.error("Error searching data:", error);
        }).finally(() => {
          setIsLoading(false); // Reset loading state
        });
    }
  };


  const onClosePopup = () => {
    setNewBillPopup(false);
  };

  const onOpenPopup = () => {
    setNewBillPopup(true);
  };

  const fetchData = async () => {
    setIsLoading(true); // Set loading state
    setProfit({
      totalAmount: 0,
      totalPanelStructureTotal: 0,
      totalRateTimesST: 0,
    })
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/getAllData`
      );
      const data = response.data;
      if (data.success) {
        setStartData(data.data);
      } else {
        console.error("Error retrieving all data:", data.message);
      }
    } catch (error) {
      console.error("Error retrieving all data:", error);
    } finally {
      setIsLoading(false);  
    }
  };
  useEffect(() => {

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="flex fixed top-0 left-0 justify-center items-center w-full h-full bg-gray-200 bg-opacity-50">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      )}
      {newBillPopup && (
        // <CreateBillPopup
        //   onClose={onClosePopup}
        //   billID={""}
        //   fetchData={fetchData}
        // />
        <GenerateBillPopup
          onClose={onClosePopup}
          billID={""}
          fetchData={fetchData}
        />

      )}
      <div className="flex justify-center p-2 m-8 rounded-md border border-gray-400 shadow-md">
        <div className="flex gap-6 justify-between items-center">
          <div>
            <div className="bg-[#F0F5FB] rounded-lg border items-center w-64 outline-none flex py-2 px-3">
              <BiSearch className="w-6 h-6 text-[#007495]" />
              <input
                type="text"
                className="w-64 focus:outline-none bg-[#F0F5FB]"
                name="companyName"
                value={searchQuery.companyName}
                onChange={handleSearchChange}
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#F0F5FB] rounded-lg border items-center w-64 outline-none flex py-2 px-3">
              <BiSearch className="w-6 h-6 text-[#007495]" />
              <input
                type="text"
                className="w-64 focus:outline-none bg-[#F0F5FB]"
                name="technition"
                value={searchQuery.technition}
                onChange={handleSearchChange}
                placeholder="Technician Name"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-red-700" htmlFor="">
                start date
              </label>
              <input
                className="bg-[#F0F5FB] rounded-lg border items-center outline-none flex py-2 px-3"
                type="date"
                name="startDate"
                value={searchQuery.startDate}
                onChange={handleSearchChange}
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="" className="text-red-700">
                end date
              </label>
              <input
                className="bg-[#F0F5FB] rounded-lg border items-center outline-none flex py-2 px-3"
                type="date"
                name="endDate"
                value={searchQuery.endDate}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="flex gap-2 item">
            <CustomButton
              text={"Search"}
              type={"outline"}
              extraClass="text-lg"
              onClick={handleSearch}
            />
            <CustomButton
              onClick={onOpenPopup}
              type={"primary"}
              text={"Add New Bill"}
            />
          </div>
        </div>
      </div>

      <ViewBillGrid
        fetchData={fetchData}
        searchResults={searchResults}
        startData={startData}
        profit={profit}
      />
    </div>
  );
};

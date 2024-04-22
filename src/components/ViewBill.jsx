import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import CustomButton from "../common/CustomButton";
import CreateBillPopup from "../popups/create-billl-poup/CreateBillPopup";
import axios from "axios";
import { ViewBillGrid } from "./ViewBillGrid";
import { toast } from "react-toastify";

export const ViewBill = () => {
  const [searchQuery, setSearchQuery] = useState({
    companyName: "",
    technition: "",
    startDate: "",
    endDate: "",
  });

  const [newBillPopup, setNewBillPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [profit, setProfit] = useState({
    totalAmount: 0,
    totalPanelStructureGT: 0,
  });

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
      // If all search fields are empty, fetch all data
      setProfit({
        totalAmount: 0,
        totalPanelStructureGT: 0,
      })
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
              totalPanelStructureGT: data.totalPanelStructureGT,
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
  

  const onClosePopup = (e, isSaved) => {
    setNewBillPopup(false);
  };

  const onOpenPopup = () => {
    setNewBillPopup(true);
  };

  const fetchData = async () => {
    setIsLoading(true); // Set loading state
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/getAllData`
      );
      const data = response.data;
      if (data.success) {
        setSearchResults(data.data);
      } else {
        console.error("Error retrieving all data:", data.message);
      }
    } catch (error) {
      console.error("Error retrieving all data:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };
  useEffect(() => {
    // console.log("featch data");
    fetchData();
  }, []);

  return (
    <div>
       {isLoading && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-200 bg-opacity-50">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      )}
      {newBillPopup && (
        <CreateBillPopup
          onClose={onClosePopup}
          billID={""}
          fetchData={fetchData}
        />
      )}
      <div className="flex justify-center p-2 m-8 border border-gray-400 rounded-md shadow-md">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="bg-[#F0F5FB] rounded-lg border items-center w-96 outline-none flex py-2 px-3">
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
            <div className="bg-[#F0F5FB] rounded-lg border items-center w-96 outline-none flex py-2 px-3">
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
            <h1 className="text-red-700" htmlFor="">
              start date
            </h1>
            <input
              className="bg-[#F0F5FB] rounded-lg border items-center outline-none flex py-2 px-3"
              type="date"
              name="startDate"
              value={searchQuery.startDate}
              onChange={handleSearchChange}
            />

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
        profit={profit}
      />
    </div>
  );
};

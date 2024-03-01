import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import CustomButton from "../common/CustomButton";
import CreateBillPopup from "../popups/create-billl-poup/CreateBillPopup";
import axios from "axios";
import { ViewBillGrid } from "./ViewBillGrid";
import { toast } from "react-toastify";


export const ViewBill = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [newBillPopup, setNewBillPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/search", {
        companyName: searchQuery.toUpperCase,
        date: selectedDate,
      });
      const data = response.data;
      if (data.success) {
        setSearchResults(data.data);
      } else {
        console.error("Error searching data:", data.message);
      }
    } catch (error) {
      toast.error("Data not found");
      console.error("Error searching data:", error);
    }
  };

  const onClosePopup = (e, isSaved) => {
    setNewBillPopup(false);
  };

  const onOpenPopup = () => {
    setNewBillPopup(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/getAllData');
      const data = response.data;
      if (data.success) {
        setSearchResults(data.data);
      } else {
        console.error('Error retrieving all data:', data.message);
      }
    } catch (error) {
      console.error('Error retrieving all data:', error);
    }
  };
  useEffect(() => {
    console.log("featch data")
    fetchData();
  }, []);


  return (
    <div>
      {newBillPopup && (
        <CreateBillPopup onClose={onClosePopup} billID={""} />
      )}
      <div className="flex justify-center p-2 m-8 border border-gray-400 rounded-md shadow-md">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="bg-[#F0F5FB] rounded-lg border items-center w-96 outline-none flex py-2 px-3">
              <BiSearch className="w-6 h-6 text-[#007495]" />
              <input
                type="text"
                className="w-64 focus:outline-none bg-[#F0F5FB]"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
            </div>
          </div>
          <div>
            {/* <CustomInput type="date" value={selectedDate} onChange={handleDateChange} /> */}
            <input
              className="bg-[#F0F5FB] rounded-lg border items-center w-56 outline-none flex py-2 px-3"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex gap-8 item">
            <CustomButton
              text={"Search"}
              type={"outline"}
              extraClass="text-lg"
              onClick={handleSearch}
            />
            <CustomButton onClick={onOpenPopup} text={"Add New Bill"} />
          </div>
        </div>
      </div>

      <ViewBillGrid fetchData={fetchData} searchResults={searchResults} />
    </div>
  );
};

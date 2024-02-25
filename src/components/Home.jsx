import { ViewBill } from "./ViewBill";
const Home = () => {
  return (
    <>
      {/* <h1 className="flex items-center justify-center p-2 m-8 text-4xl font-bold text-blue-800 border border-gray-400 rounded-md shadow-md">
        SOLAR BILLING SYSTEM
      </h1> */}
      {/* <div className='flex flex-col items-center justify-center w-full h-full '>
        <Link to="/billing" className='flex flex-row p-4 m-4 text-xl text-black bg-gray-200 rounded-md shadow-md hover:bg-gray-300'>
          <img src="/img/c_bill.png" width={50} height={50} alt="" />
          <span className='p-4'>CREATE BILL</span>
        </Link>
        <Link to="/ViewBill" className='flex flex-row p-4 m-4 text-xl text-black bg-gray-200 rounded-md shadow-md hover:bg-gray-300'>
          <img src="/img/v_bill.png" width={50} height={50} alt="" />
          <span className='p-4'>VIEW BILL</span>
        </Link>

       <CustomButton onClick={onOpenPopup} text={"Add New Bill"} /> 
      </div> */}
      <ViewBill />
    </>
  );
};

export default Home;

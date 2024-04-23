import React, { useState, useEffect } from "react";
import CustomButton from "../../common/CustomButton";
import CustomInput from "../../common/CustomInput";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { toast } from "react-toastify";
import Validator, {
  ValidationTypes as V_Type,
} from "react-form-supervalidator";
import { ErrorHandlingMessage } from "../../Utils/ErrorHandlingMessage";

const CreateBillPopup = ({ onClose, billID, fetchData }) => {
  const [locationModel, setLocationModel] = useState({
    id: 0,
    billNo: "",
    companyName: "",
    date: "",
    technition: "",
    customerName: "",
    address: "",
    total: "",

    reason: "",
    otherExpenses: "",

    mughalGarderQ: "",
    mughalGarderP: "",
    mughalGarderT: "",

    crossPipeQ: "",
    crossPipeP: "",
    crossPipeT: "",

    cChannelQ: "",
    cChannelP: "",
    cChannelT: "",

    basePlateQ: "",
    basePlateP: "",
    basePlateT: "",

    rawalBoltQ: "",
    rawalBoltP: "",
    rawalBoltT: "",

    nutBoltQ: "",
    nutBoltP: "",
    nutBoltT: "",

    cutterDiskQ: "",
    cutterDiskP: "",
    cutterDiskT: "",

    weldingRodQ: "",
    weldingRodP: "",
    weldingRodT: "",

    blackPaintQ: "",
    blackPaintP: "",
    blackPaintT: "",

    sprayPaintQ: "",
    sprayPaintP: "",
    sprayPaintT: "",

    epoxyQ: "",
    epoxyP: "",
    epoxyT: "",

    nakkyQ: "",
    nakkyP: "",
    nakkyT: "",

    miliDiskQ: "",
    miliDiskP: "",
    miliDiskT: "",

    angelQ: "",
    angelP: "",
    angelT: "",

    topPlateQ: "",
    topPlateP: "",
    topPlateT: "",

    panelInstallStructure1: "",
    panelInstallStructureP: "",
    panelInstallStructureG: "",
    panelInstallStructureST: "",
    panelInstallStructureGT: "",
  });

  // const [loading, setLoading] = useState(false);

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    let eventValue = value.replace(/^\s*/gm, ""); //// For remove space from start ///
    setLocationModel((prevmodel) => ({
      ...prevmodel,
      [name]: eventValue,
    }));
  };

  // Validation Types
  const [validationModel, setValidationModel] = useState({
    companyNameError: null,
    billNoError: null,
    customerNameError: null,
    reasonError: null,
    otherExpensesError: null,
    dateError: null,
    technitionError: null,
    addressError: null,
    mughalGarderPError: null,
    mughalGarderQError: null,
    crossPipeQError: null,
    crossPipePError: null,
    cChannelQError: null,
    cChannelPError: null,
    basePlateQErrror: null,
    basePlatePErrror: null,
    rawalBoltQErrror: null,
    rawalBoltPErrror: null,
    nutBoltQErrror: null,
    nutBoltPErrror: null,
    cutterDiskQErrror: null,
    cutterDiskPErrror: null,
    weldingRodQError: null,
    weldingRodPError: null,
    blackPaintQError: null,
    blackPaintPError: null,
    sprayPaintQError: null,
    sprayPaintPError: null,
    epoxyQError: null,
    epoxyPError: null,
    nakkyQError: null,
    nakkyPError: null,
    miliDiskQError: null,
    miliDiskPError: null,
    angelQError: null,
    angelPError: null,
    topPlateQError: null,
    topPlatePError: null,
    panelInstallStructure1Error: null,
    panelInstallStructurePError: null,
    panelInstallStructureGError: null,
  });

  const setValidation = () => {
    let validation_Obj = {
      ...validationModel,
      billNoError: Validator(
        locationModel.companyName,
        [V_Type.required],
        ["Bill No is required"]
      ),
      companyNameError: Validator(
        locationModel.billNo,
        [V_Type.required],
        ["Company Name is required"]
      ),
      reasonError: Validator(
        locationModel.reason,
        [V_Type.required],
        ["Reason is required"]
      ),
      otherExpensesError: Validator(
        locationModel.otherExpenses,
        [V_Type.required],
        ["Other Expenses is required"]
      ),
      technitionError: Validator(
        locationModel.technition,
        [V_Type.required],
        ["Technition Name is required"]
      ),
      addressError: Validator(
        locationModel.address,
        [V_Type.required],
        ["address is required"]
      ),
      customerNameError: Validator(
        locationModel.customerName,
        [V_Type.required],
        ["Customer Name Error is required"]
      ),
      dateError: Validator(
        locationModel.date,
        [V_Type.required],
        ["Date is required"]
      ),
      mughalGarderPError: Validator(
        locationModel.mughalGarderP,
        [V_Type.required],
        ["it is required"]
      ),
      mughalGarderQError: Validator(
        locationModel.mughalGarderQ,
        [V_Type.required],
        ["it is required"]
      ),
      crossPipeQError: Validator(
        locationModel.crossPipeQ,
        [V_Type.required],
        ["it is required"]
      ),
      crossPipePError: Validator(
        locationModel.crossPipeP,
        [V_Type.required],
        ["it is required"]
      ),
      cChannelQError: Validator(
        locationModel.cChannelQ,
        [V_Type.required],
        ["it is required"]
      ),
      cChannelPError: Validator(
        locationModel.cChannelP,
        [V_Type.required],
        ["it is required"]
      ),
      basePlateQErrror: Validator(
        locationModel.basePlateQ,
        [V_Type.required],
        ["it is required"]
      ),
      basePlatePErrror: Validator(
        locationModel.basePlateP,
        [V_Type.required],
        ["it is required"]
      ),
      rawalBoltQErrror: Validator(
        locationModel.rawalBoltQ,
        [V_Type.required],
        ["it is required"]
      ),
      rawalBoltPErrror: Validator(
        locationModel.rawalBoltP,
        [V_Type.required],
        ["it is required"]
      ),
      nutBoltQErrror: Validator(
        locationModel.nutBoltQ,
        [V_Type.required],
        ["it is required"]
      ),
      nutBoltPErrror: Validator(
        locationModel.nutBoltP,
        [V_Type.required],
        ["it is required"]
      ),
      cutterDiskQErrror: Validator(
        locationModel.cutterDiskQ,
        [V_Type.required],
        ["it is required"]
      ),
      cutterDiskPErrror: Validator(
        locationModel.cutterDiskP,
        [V_Type.required],
        ["it is required"]
      ),
      weldingRodQError: Validator(
        locationModel.weldingRodQ,
        [V_Type.required],
        ["it is required"]
      ),
      weldingRodPError: Validator(
        locationModel.weldingRodP,
        [V_Type.required],
        ["it is required"]
      ),
      blackPaintQError: Validator(
        locationModel.blackPaintQ,
        [V_Type.required],
        ["it is required"]
      ),
      blackPaintPError: Validator(
        locationModel.blackPaintP,
        [V_Type.required],
        ["it is required"]
      ),
      sprayPaintQError: Validator(
        locationModel.sprayPaintQ,
        [V_Type.required],
        ["it is required"]
      ),
      sprayPaintPError: Validator(
        locationModel.sprayPaintP,
        [V_Type.required],
        ["it is required"]
      ),
      epoxyQError: Validator(
        locationModel.epoxyQ,
        [V_Type.required],
        ["it is required"]
      ),
      epoxyPError: Validator(
        locationModel.epoxyP,
        [V_Type.required],
        ["it is required"]
      ),
      nakkyQError: Validator(
        locationModel.nakkyQ,
        [V_Type.required],
        ["it is required"]
      ),
      nakkyPError: Validator(
        locationModel.nakkyP,
        [V_Type.required],
        ["it is required"]
      ),
      miliDiskQError: Validator(
        locationModel.miliDiskQ,
        [V_Type.required],
        ["it is required"]
      ),
      miliDiskPError: Validator(
        locationModel.miliDiskP,
        [V_Type.required],
        ["it is required"]
      ),
      angelQError: Validator(
        locationModel.angelQ,
        [V_Type.required],
        ["it is required"]
      ),
      angelPError: Validator(
        locationModel.angelP,
        [V_Type.required],
        ["it is required"]
      ),
      topPlateQError: Validator(
        locationModel.topPlateQ,
        [V_Type.required],
        ["it is required"]
      ),
      topPlatePError: Validator(
        locationModel.topPlateP,
        [V_Type.required],
        ["it is required"]
      ),
      panelInstallStructure1Error: Validator(
        locationModel.panelInstallStructure1,
        [V_Type.required],
        ["it is required"]
      ),
      panelInstallStructurePError: Validator(
        locationModel.panelInstallStructureP,
        [V_Type.required],
        ["it is required"]
      ),
      panelInstallStructureGError: Validator(
        locationModel.panelInstallStructureG,
        [V_Type.required],
        ["it is required"]
      ),
    };
    setValidationModel(validation_Obj);

    return Validator(validation_Obj, V_Type.NullCheck);
  };

  const clearAllFields = () => {
    setLocationModel((prevState) => {
      const newState = { ...prevState };
      for (const key in newState) {
        newState[key] = "";
      }
      return newState;
    });
  };

  const clearFields = () => {
    setLocationModel((prevState) => {
      const newState = { ...prevState };
      for (const key in newState) {
        if (key.endsWith("Q") && !key.endsWith("P")) {
          newState[key] = "";
        }
      }
      newState['billNo'] = "";
      newState['address'] = "";
      newState['customerName'] = "";
      newState['technition'] = "";
      newState['date'] = "";
      newState['companyName'] = "";
      newState['otherExpenses'] = "";
      newState['reason'] = "";
      newState['panelInstallStructure1'] = "";
      newState['panelInstallStructureP'] = "";
      newState['panelInstallStructureG'] = "";
       
      return newState;
    });
  };

  const onAddBill = async (flag) => {
    let my_validation = setValidation();
    if (my_validation) {
       
    } else {
      try {
        // Calculate the T values
        const updatedLocationModel = {
          ...locationModel,
          mughalGarderQ: Number(locationModel.mughalGarderQ).toFixed(2),
          mughalGarderP: Number(locationModel.mughalGarderP).toFixed(2),
          mughalGarderT: String(
            (
              Number(locationModel.mughalGarderQ) *
              Number(locationModel.mughalGarderP)
            ).toFixed(2)
          ),
          crossPipeQ: Number(locationModel.crossPipeQ).toFixed(2),
          crossPipeP: Number(locationModel.crossPipeP).toFixed(2),
          crossPipeT: String(
            (
              Number(locationModel.crossPipeQ) *
              Number(locationModel.crossPipeP)
            ).toFixed(2)
          ),
          cChannelQ: Number(locationModel.cChannelQ).toFixed(2),
          cChannelP: Number(locationModel.cChannelP).toFixed(2),
          cChannelT: String(
            (
              Number(locationModel.cChannelQ) * Number(locationModel.cChannelP)
            ).toFixed(2)
          ),
          basePlateQ: Number(locationModel.basePlateQ).toFixed(2),
          basePlateP: Number(locationModel.basePlateP).toFixed(2),
          basePlateT: String(
            (
              Number(locationModel.basePlateQ) *
              Number(locationModel.basePlateP)
            ).toFixed(2)
          ),
          rawalBoltQ: Number(locationModel.rawalBoltP).toFixed(2),
          rawalBoltP: Number(locationModel.rawalBoltP).toFixed(2),
          rawalBoltT: String(
            (
              Number(locationModel.rawalBoltQ) *
              Number(locationModel.rawalBoltP)
            ).toFixed(2)
          ),
          nutBoltQ: Number(locationModel.nutBoltQ).toFixed(2),
          nutBoltP: Number(locationModel.nutBoltP).toFixed(2),
          nutBoltT: String(
            (
              Number(locationModel.nutBoltQ) * Number(locationModel.nutBoltP)
            ).toFixed(2)
          ),
          cutterDiskQ: Number(locationModel.cutterDiskQ).toFixed(2),
          cutterDiskP: Number(locationModel.cutterDiskP).toFixed(2),
          cutterDiskT: String(
            (
              Number(locationModel.cutterDiskQ) *
              Number(locationModel.cutterDiskP)
            ).toFixed(2)
          ),
          weldingRodQ: Number(locationModel.weldingRodQ).toFixed(2),
          weldingRodP: Number(locationModel.weldingRodP).toFixed(2),
          weldingRodT: String(
            (
              Number(locationModel.weldingRodQ) *
              Number(locationModel.weldingRodP)
            ).toFixed(2)
          ),
          blackPaintQ: Number(locationModel.blackPaintQ).toFixed(2),
          blackPaintP: Number(locationModel.blackPaintP).toFixed(2),
          blackPaintT: String(
            (
              Number(locationModel.blackPaintQ) *
              Number(locationModel.blackPaintP)
            ).toFixed(2)
          ),
          sprayPaintQ: Number(locationModel.sprayPaintQ).toFixed(2),
          sprayPaintP: Number(locationModel.sprayPaintP).toFixed(2),
          sprayPaintT: String(
            (
              Number(locationModel.sprayPaintQ) *
              Number(locationModel.sprayPaintP)
            ).toFixed(2)
          ),
          epoxyQ: Number(locationModel.epoxyQ).toFixed(2),
          epoxyP: Number(locationModel.epoxyP).toFixed(2),
          epoxyT: String(
            (
              Number(locationModel.epoxyQ) * Number(locationModel.epoxyP)
            ).toFixed(2)
          ),
          nakkyQ: Number(locationModel.nakkyQ).toFixed(2),
          nakkyP: Number(locationModel.nakkyP).toFixed(2),
          nakkyT: String(
            (
              Number(locationModel.nakkyQ) * Number(locationModel.nakkyP)
            ).toFixed(2)
          ),
          miliDiskQ: Number(locationModel.miliDiskQ).toFixed(2),
          miliDiskP: Number(locationModel.miliDiskP).toFixed(2),
          miliDiskT: String(
            (
              Number(locationModel.miliDiskQ) * Number(locationModel.miliDiskP)
            ).toFixed(2)
          ),
          angelQ: Number(locationModel.angelQ).toFixed(2),
          angelP: Number(locationModel.angelP).toFixed(2),
          angelT: String(
            (
              Number(locationModel.angelQ) * Number(locationModel.angelP)
            ).toFixed(2)
          ),
          topPlateQ: Number(locationModel.topPlateQ).toFixed(2),
          topPlateP: Number(locationModel.topPlateP).toFixed(2),
          topPlateT: String(
            (
              Number(locationModel.topPlateQ) * Number(locationModel.topPlateP)
            ).toFixed(2)
          ),
          panelInstallStructure1: Number(
            locationModel.panelInstallStructure1
          ).toFixed(2),
          panelInstallStructureP: Number(
            locationModel.panelInstallStructureP
          ).toFixed(2),
          panelInstallStructureG: Number(
            locationModel.panelInstallStructureG
          ).toFixed(2),
          panelInstallStructureST: String(
            (
              Number(locationModel.panelInstallStructure1) *
              Number(locationModel.panelInstallStructureP)
            ).toFixed(2)
          ),
          panelInstallStructureGT: String(
            (
              Number(locationModel.panelInstallStructure1) *
              Number(locationModel.panelInstallStructureP) *
              Number(locationModel.panelInstallStructureG)
            ).toFixed(2)
          ),
          total: Object.keys(locationModel)
            .filter((k) => !k.endsWith("Q"))
            .reduce((accumulator, key) => {
              if (key.endsWith("P")) {
                accumulator +=
                  (locationModel[key] || 0) *
                  (locationModel[key.slice(0, key.length - 1) + "Q"] || 0);
              }
              return accumulator;
            }, 0)
            .toFixed(2),
        };

        const payload = {
          locationModel: updatedLocationModel,
        };

        // setLoading(true);
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/api/save`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;
        if (data.success) {
          if (flag === true) {
            onClose();
            fetchData();
          } else {
            clearFields();
            fetchData();
          }
          toast.success("Data saved successfully");
        } else {
          toast.error("Error saving data");
        }

        // if (data.success && flag === false) {
        //   toast.success("Data saved successfully");

        // } else {
        //   toast.error("Error saving data");
        // }

        // setLoading(false);
      } catch (error) {
        ErrorHandlingMessage(error);
        // setLoading(false);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (billID) {
        // setLoading(true);
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_URL}/api/getData/${billID}`,
            {
              // Data to update, if needed
            }
          );
          // setLoading(false);
          setLocationModel(response.data.data);
        } catch (error) {
          // setLoading(false);
          // setError(error.message || 'An error occurred');
        }
      }
    };
    getData();
  }, [billID]);

  return (
    <div className="overflow-y-auto h-96">
      {/* {loading && <FullPageLoader allowFullScreen={true} />} */}
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <div className="relative max-w-6xl overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full">
              <div className="bg-white ">
                <div className="flex justify-between px-4 py-4 border-b-2">
                  <h2 className="text-xl font-semibold">
                    {billID ? "Update Bill" : "Add Bill"}
                  </h2>
                  <div className="col-span-6 md:col-span-3">
                    <CustomInput
                      name={"billNo"}
                      value={locationModel.billNo}
                      onChange={onhandleChange}
                      label="Bill No"
                      type="number"
                      placeholder=""
                      required={true}
                    />
                    {validationModel.billNoError}
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2"
                  >
                    <GrClose className="text-indigo-500 " />
                  </button>
                </div>
                {/* 
                 <div  className='rtl-container'> */}
                <div className="grid grid-cols-12 gap-4 px-4 py-4 ">
                  <div className="col-span-6 md:col-span-3">
                    <CustomInput
                      name={"companyName"}
                      value={locationModel.companyName}
                      onChange={onhandleChange}
                      label="Company Name"
                      type="text"
                      placeholder="کمپنی کا نام"
                      required={true}
                    />
                    {validationModel.companyNameError}
                  </div>
                  <div className="col-span-6 md:col-span-3 ">
                    <CustomInput
                      name={"technition"}
                      value={locationModel.technition}
                      onChange={onhandleChange}
                      label="Technician Name"
                      type="text"
                      placeholder=""
                      required={true}
                    />
                    {validationModel.technitionError}
                  </div>
                  <div className="col-span-6 md:col-span-3 ">
                    <CustomInput
                      name={"customerName"}
                      value={locationModel.customerName}
                      onChange={onhandleChange}
                      label="Customer Name"
                      type="text"
                      placeholder=""
                      required={true}
                    />
                    {validationModel.technitionError}
                  </div>
                  <div className="col-span-6 md:col-span-3 ">
                    <CustomInput
                      name={"date"}
                      value={locationModel.date}
                      onChange={onhandleChange}
                      label="Date"
                      type="date"
                      required={true}
                    />
                    {validationModel.dateError}
                  </div>
                  <div className="col-span-12 md:col-span-12 ">
                    <CustomInput
                      name={"address"}
                      value={locationModel.address}
                      onChange={onhandleChange}
                      label="Address"
                      type="text"
                      placeholder="address"
                      required={true}
                    />
                    {validationModel.addressError}
                  </div>

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-2xl font-bold text-center">
                      Title
                    </h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <h1 className="mt-2 text-2xl font-bold text-center">
                      Quantity
                    </h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <h1 className="mt-2 text-2xl font-bold text-center">
                      Price
                    </h1>
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-2xl font-bold text-end">Total</h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Mughal Garder</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"mughalGarderQ"}
                      value={locationModel.mughalGarderQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.mughalGarderQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"mughalGarderP"}
                      value={locationModel.mughalGarderP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.mughalGarderPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.mughalGarderQ *
                          locationModel.mughalGarderP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Cross Pipe 18G</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"crossPipeQ"}
                      value={locationModel.crossPipeQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.crossPipeQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"crossPipeP"}
                      value={locationModel.crossPipeP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.crossPipePError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.crossPipeQ * locationModel.crossPipeP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">C channel 138"</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"cChannelQ"}
                      value={locationModel.cChannelQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.cChannelQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"cChannelP"}
                      value={locationModel.cChannelP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.cChannelPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.cChannelQ * locationModel.cChannelP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Base Plate 8x8 (5mm)</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"basePlateQ"}
                      value={locationModel.basePlateQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.basePlateQErrror}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"basePlateP"}
                      value={locationModel.basePlateP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.basePlatePErrror}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.basePlateQ * locationModel.basePlateP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Rawal Bolt</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"rawalBoltQ"}
                      value={locationModel.rawalBoltQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.rawalBoltQErrror}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"rawalBoltP"}
                      value={locationModel.rawalBoltP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.rawalBoltPErrror}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.rawalBoltQ * locationModel.rawalBoltP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Nut Bolt</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"nutBoltQ"}
                      value={locationModel.nutBoltQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.nutBoltQErrror}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"nutBoltP"}
                      value={locationModel.nutBoltP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.nutBoltPErrror}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.nutBoltQ * locationModel.nutBoltP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Cutter Disk</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"cutterDiskQ"}
                      value={locationModel.cutterDiskQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.cutterDiskQErrror}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"cutterDiskP"}
                      value={locationModel.cutterDiskP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.cutterDiskPErrror}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.cutterDiskQ * locationModel.cutterDiskP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Welding Rod</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"weldingRodQ"}
                      value={locationModel.weldingRodQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.weldingRodQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"weldingRodP"}
                      value={locationModel.weldingRodP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.weldingRodPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.weldingRodQ * locationModel.weldingRodP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Black Paint</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"blackPaintQ"}
                      value={locationModel.blackPaintQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.blackPaintQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"blackPaintP"}
                      value={locationModel.blackPaintP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.blackPaintPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.blackPaintQ * locationModel.blackPaintP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Spray Paint</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"sprayPaintQ"}
                      value={locationModel.sprayPaintQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.sprayPaintQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"sprayPaintP"}
                      value={locationModel.sprayPaintP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.sprayPaintPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.sprayPaintQ * locationModel.sprayPaintP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Epoxy</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"epoxyQ"}
                      value={locationModel.epoxyQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.epoxyQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"epoxyP"}
                      value={locationModel.epoxyP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.epoxyPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.epoxyQ * locationModel.epoxyP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Nakky</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"nakkyQ"}
                      value={locationModel.nakkyQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.nakkyQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"nakkyP"}
                      value={locationModel.nakkyP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.nakkyPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.nakkyQ * locationModel.nakkyP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Mili Disk</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"miliDiskQ"}
                      value={locationModel.miliDiskQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.miliDiskQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"miliDiskP"}
                      value={locationModel.miliDiskP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.miliDiskPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.miliDiskQ * locationModel.miliDiskP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Angel</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"angelQ"}
                      value={locationModel.angelQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.angelQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"angelP"}
                      value={locationModel.angelP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.angelPError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.angelQ * locationModel.angelP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Top Plate</h1>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"topPlateQ"}
                      value={locationModel.topPlateQ}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.topPlateQError}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <CustomInput
                      name={"topPlateP"}
                      value={locationModel.topPlateP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.topPlatePError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.topPlateQ * locationModel.topPlateP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 border-t-2 md:col-span-8">
                    <h1 className="text-2xl font-semibold text-end">TOTAL</h1>
                  </div>
                  <div className="col-span-12 border-t-2 md:col-span-4">
                    <h1 className="text-2xl font-semibold text-red-700 text-end">
                      {Number(
                        Object.keys(locationModel)
                          .filter((k) => !k.endsWith("Q"))
                          .reduce((accumulator, key) => {
                            if (key.endsWith("P")) {
                              accumulator +=
                                (locationModel[key] || 0) *
                                (locationModel[
                                  key.slice(0, key.length - 1) + "Q"
                                ] || 0);
                            }
                            return accumulator;
                          }, 0)
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">
                      Panel Install Structure
                    </h1>
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <CustomInput
                      name={"panelInstallStructure1"}
                      value={locationModel.panelInstallStructure1}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.panelInstallStructure1Error}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <CustomInput
                      name={"panelInstallStructureP"}
                      value={locationModel.panelInstallStructureP}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.panelInstallStructurePError}
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-end">
                      {Number(
                        locationModel.panelInstallStructure1 *
                          locationModel.panelInstallStructureP
                      ).toFixed(2)}
                    </h1>
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <CustomInput
                      name={"panelInstallStructureG"}
                      value={locationModel.panelInstallStructureG}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.panelInstallStructureGError}
                  </div>

                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-2xl text-green-700 text-end ">
                      {Number(
                        locationModel.panelInstallStructure1 *
                          locationModel.panelInstallStructureP *
                          locationModel.panelInstallStructureG +
                          (locationModel.otherExpenses
                            ? parseFloat(locationModel.otherExpenses)
                            : 0)
                      ).toFixed(2)}
                    </h1>
                  </div>
                  {/*  */}

                  <div className="col-span-12 md:col-span-2">
                    <h1 className="mt-2 text-center">Other Expenses</h1>
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <CustomInput
                      name={"otherExpenses"}
                      value={locationModel.otherExpenses}
                      onChange={onhandleChange}
                      type="text"
                      required={true}
                    />
                    {validationModel.otherExpensesError}
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <CustomInput
                      name={"reason"}
                      value={locationModel.reason}
                      onChange={onhandleChange}
                      placeholder={"Reason"}
                      type="text"
                      required={true}
                    />
                    {validationModel.reasonError}
                  </div>
                </div>

                <div className="flex justify-end px-4 py-4 border-t-2">
                  <CustomButton
                  type={"primary"}
                    onClick={
                      billID ? () => onAddBill(true) : () => onAddBill(false)
                    }
                    text={billID ? "Update" : "Save"}
                  />
                  <button
                    onClick={onClose}
                    className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={clearFields}
                    className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2"
                  >
                    Clear All Quantities
                  </button>
                  <button
                    onClick={clearAllFields}
                    className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2"
                  >
                    Clear All Fields
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBillPopup;

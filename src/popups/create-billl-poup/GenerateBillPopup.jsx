

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
//  this is a popup template to make any poup use this template
const GenerateBillPopup = ({ onClose, billID, fetchData }) => {
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


        mughalGarder: "Mughal Garder",
        mughalGarderQ: "",
        mughalGarderP: "",
        mughalGarderT: "",

        crossPipe: "Cross Pipe 18G",
        crossPipeQ: "",
        crossPipeP: "",
        crossPipeT: "",

        cChannel: "C channel 138",
        cChannelQ: "",
        cChannelP: "",
        cChannelT: "",

        basePlate: "Base Plate 8x8 (5mm)",
        basePlateQ: "",
        basePlateP: "",
        basePlateT: "",

        rawalBolt: "Rawal Bolt",
        rawalBoltQ: "",
        rawalBoltP: "",
        rawalBoltT: "",

        nutBolt: "Nut Bolt",
        nutBoltQ: "",
        nutBoltP: "",
        nutBoltT: "",

        cutterDisk: "Cutter Disk",
        cutterDiskQ: "",
        cutterDiskP: "",
        cutterDiskT: "",

        weldingRod: "Welding Rod",
        weldingRodQ: "",
        weldingRodP: "",
        weldingRodT: "",

        blackPaint: "Black Paint",
        blackPaintQ: "",
        blackPaintP: "",
        blackPaintT: "",

        sprayPaint: "Spray Paint",
        sprayPaintQ: "",
        sprayPaintP: "",
        sprayPaintT: "",

        epoxy: "Epoxy",
        epoxyQ: "",
        epoxyP: "",
        epoxyT: "",

        nakky: "Nakky",
        nakkyQ: "",
        nakkyP: "",
        nakkyT: "",

        miliDisk: "Mili Disk",
        miliDiskQ: "",
        miliDiskP: "",
        miliDiskT: "",

        angel: "Angel",
        angelQ: "",
        angelP: "",
        angelT: "",

        topPlate: "Top Plate",
        topPlateQ: "",
        topPlateP: "",
        topPlateT: "",

        panelInstallStructure: [{
            panelInstallStructure1: "",
            panelInstallStructureP: "",
            panelInstallStructureG: "",
            panelInstallStructureST: "",
            panelInstallStructureGT: "",
        }]


    });
    // console.log("show me the data", locationModel.panelInstallStructure)
    // const [loading, setLoading] = useState(false);

    const onhandleChange = (e, index) => {
        const { name, value } = e.target;
        let eventValue = value.replace(/^\s*/gm, "");

        setLocationModel(prevState => {
            const updatedPanelItems = [...prevState.panelInstallStructure];
            updatedPanelItems[index] = {
                ...updatedPanelItems[index],
                [name]: eventValue
            };
            return {
                ...prevState,
                panelInstallStructure: updatedPanelItems
            };
        });
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
        mughalGarderError: null,
        mughalGarderQError: null,
        crossPipeQError: null,
        crossPipeError: null,
        crossPipePError: null,
        cChannelQError: null,
        cChannelError: null,
        cChannelPError: null,
        basePlateQErrror: null,
        basePlatePErrror: null,
        basePlateErrror: null,
        rawalBoltQErrror: null,
        rawalBoltPErrror: null,
        rawalBoltErrror: null,
        nutBoltQErrror: null,
        nutBoltPErrror: null,
        nutBoltErrror: null,
        cutterDiskQErrror: null,
        cutterDiskPErrror: null,
        cutterDiskErrror: null,
        weldingRodQError: null,
        weldingRodPError: null,
        weldingRodError: null,
        blackPaintError: null,
        blackPaintQError: null,
        blackPaintPError: null,
        sprayPaintQError: null,
        sprayPaintError: null,
        sprayPaintPError: null,
        epoxyQError: null,
        epoxyError: null,
        epoxyPError: null,
        nakkyQError: null,
        nakkyError: null,
        nakkyPError: null,
        miliDiskQError: null,
        miliDiskError: null,
        miliDiskPError: null,
        angelError: null,
        angelQError: null,
        angelPError: null,
        topPlateError: null,
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
            mughalGarderError: Validator(
                locationModel.mughalGarder,
                [V_Type.required],
                ["it is required"]
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
            crossPipeError: Validator(
                locationModel.crossPipe,
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
            cChannelError: Validator(
                locationModel.cChannel,
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
            basePlateErrror: Validator(
                locationModel.basePlate,
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
            rawalBoltErrror: Validator(
                locationModel.rawalBolt,
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
            nutBoltErrror: Validator(
                locationModel.nutBolt,
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
            cutterDiskErrror: Validator(
                locationModel.cutterDisk,
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
            weldingRodError: Validator(
                locationModel.weldingRod,
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
            blackPaintError: Validator(
                locationModel.blackPaint,
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
            sprayPaintError: Validator(
                locationModel.sprayPaint,
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
            epoxyError: Validator(
                locationModel.epoxy,
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
            nakkyError: Validator(
                locationModel.nakky,
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
            miliDiskError: Validator(
                locationModel.miliDisk,
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
            angelError: Validator(
                locationModel.angel,
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
            topPlateError: Validator(
                locationModel.topPlate,
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
    const [items, setItems] = useState([]);
    // console.log("show me the items", items)

    // Function to add a new item
    const addItem = () => {
        // Check if the length of panelInstallStructure is less than 5
        if (locationModel.panelInstallStructure.length < 6) {
            setLocationModel(prevState => ({
                ...prevState,
                panelInstallStructure: [
                    ...prevState.panelInstallStructure,
                    {
                        panelInstallStructure1: "",
                        panelInstallStructureP: "",
                        panelInstallStructureG: "",
                        panelInstallStructureST: "",
                        panelInstallStructureGT: ""
                    }
                ]
            }));
            setItems([...items, 'New Item']);
        }
    };
    console.log("show me the data2222", locationModel.panelInstallStructure)



    // Function to delete an item
    const deleteItem = (index) => {
        setLocationModel(prevState => ({
            ...prevState,
            panelInstallStructure: prevState.panelInstallStructure.filter((_, i) => i !== index)
        }));
        setItems(items.filter((_, i) => i !== index));
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

    useEffect(() => {
        // Call addItem function once when the component mounts
        addItem();
    }, []);
    return (
        // wrapperId == any unique id , for uniqueness give componentname as a wrapperID

        <div data-te-modal-init className="fixed left-0 top-0 z-[10] h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModalScrollable" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" style={{ display: 'block' }} aria-modal="true" role="dialog" data-te-open="true">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            <div data-te-modal-dialog-ref className="pointer-events-none flex items-center relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-2 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px] transform-none opacity-100">
                <div className="pointer-events-auto p-5 relative flex justify-between max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">

                    <div className='pb-3 text-2xl flex justify-between items-center font-semibold border-b'>
                        {billID ? "Update Bill" : "Add Bill"}
                        <div className="">
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

                    <div className="grid grid-cols-12 gap-4 p-4">
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

                    </div>
                    <div className="relative overflow-y-auto">
                        <div className="relative max-w-6xl overflow-hidden text-left transition-all transform bg-white rounded-lg  sm:my-8 sm:w-full">
                            <div className="bg-white ">

                                {/* 
                 <div  className='rtl-container'> */}
                                <div className="grid grid-cols-12 gap-4 px-4">


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

                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"mughalGarder"}
                                            value={locationModel.mughalGarder}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.mughalGarderError}
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
                                        <CustomInput
                                            name={"crossPipe"}
                                            value={locationModel.crossPipe}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.crossPipeError}
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
                                        <CustomInput
                                            name={"cChannel"}
                                            value={locationModel.cChannel}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.cChannelError}
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

                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"basePlate"}
                                            value={locationModel.basePlate}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.basePlateErrror}
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


                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"rawalBolt"}
                                            value={locationModel.rawalBolt}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.rawalBoltErrror}
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

                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"nutBolt"}
                                            value={locationModel.nutBolt}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.nutBoltErrror}
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

                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"cutterDisk"}
                                            value={locationModel.cutterDisk}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.cutterDiskErrror}
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
                                        <CustomInput
                                            name={"weldingRod"}
                                            value={locationModel.weldingRod}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.weldingRodError}
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
                                        <CustomInput
                                            name={"blackPaint"}
                                            value={locationModel.blackPaint}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.blackPaintError}
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
                                        <CustomInput
                                            name={"sprayPaint"}
                                            value={locationModel.sprayPaint}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.sprayPaintError}
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
                                        <CustomInput
                                            name={"epoxy"}
                                            value={locationModel.epoxy}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.epoxyError}
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
                                        <CustomInput
                                            name={"nakky"}
                                            value={locationModel.nakky}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.nakkyError}
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
                                        <CustomInput
                                            name={"miliDisk"}
                                            value={locationModel.miliDisk}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.miliDiskError}
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
                                        <CustomInput
                                            name={"angel"}
                                            value={locationModel.angel}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.angelError}
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
                                        <CustomInput
                                            name={"topPlate"}
                                            value={locationModel.topPlate}
                                            onChange={onhandleChange}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.topPlateError}
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





                                </div>




                            </div>
                        </div>
                        <button
                            onClick={addItem}
                            className="py-1.5 px-3 ml-4 mb-2 shrink-0 border rounded-lg bg-primary text-white border-slate-200 hover:border-slate-300 shadow-sm"
                        >
                            +Add
                        </button>



                        <div className="">
                            {/* Button to add a new item */}


                            {/* Displaying the list of items */}
                            {items.map((item, index) => (
                                <div className='grid grid-cols-12 gap-4 py-2 px-4' key={index}>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className="mt-2 text-left">
                                            Panel Install Structure
                                        </h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"panelInstallStructure1"}
                                            value={locationModel.panelInstallStructure[index].panelInstallStructure1}
                                            onChange={(e) => onhandleChange(e, index)}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.panelInstallStructure1Error}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"panelInstallStructureP"}
                                            value={locationModel.panelInstallStructure[index].panelInstallStructureP}
                                            onChange={(e) => onhandleChange(e, index)}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.panelInstallStructurePError}
                                    </div>
                                    <div className="col-span-12 md:col-span-1">
                                        <h1 className="mt-2 text-end">
                                            {Number(
                                                locationModel.panelInstallStructure[index].panelInstallStructure1 *
                                                locationModel.panelInstallStructure[index].panelInstallStructureP
                                            ).toFixed(2)}
                                        </h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput
                                            name={"panelInstallStructureG"}
                                            value={locationModel.panelInstallStructure[index].panelInstallStructureG}
                                            onChange={(e) => onhandleChange(e, index)}
                                            type="text"
                                            required={true}
                                        />
                                        {validationModel.panelInstallStructureGError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className="mt-2 text-2xl text-green-700 text-end ">
                                            {Number(
                                                locationModel.panelInstallStructure[index].panelInstallStructure1 *
                                                locationModel.panelInstallStructure[index].panelInstallStructureP *
                                                locationModel.panelInstallStructure[index].panelInstallStructureG +
                                                (locationModel.panelInstallStructure[index].otherExpenses
                                                    ? parseFloat(locationModel.panelInstallStructure[index].otherExpenses)
                                                    : 0)
                                            ).toFixed(2)}
                                        </h1>
                                    </div>
                                    {index === 0 ? "" : (<div className='col-span-1'>
                                        <button
                                            onClick={() => deleteItem(index)}
                                            className="py-1.5 px-3  shrink-0 border rounded-lg bg-red-600 text-white border-slate-200 hover:border-slate-300 shadow-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>)}
                                </div>

                            ))}


                        </div>

                    </div>



                    <div className="grid grid-cols-12 gap-4 px-4">
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




                    <div className="flex flex-wrap items-center justify-end flex-shrink-0 gap-2 py-2">
                        {/* <div className="flex justify-end px-4 py-4 border-t-2"> */}
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
                        {/* </div> */}
                        {/* <CustomButton text={"Cancel"} type={"outline"} onClick={onClose} />
                        <CustomButton text="Save" /> */}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default GenerateBillPopup

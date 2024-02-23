import React, { useState, useEffect } from 'react'
import CustomButton from '../../common/CustomButton'
import CustomInput from '../../common/CustomInput'
import { GrClose } from 'react-icons/gr'
import axios from 'axios';
import { toast } from 'react-toastify'
import Validator, { ValidationTypes as V_Type, } from 'react-form-supervalidator';
import { ErrorHandlingMessage } from '../../Utils/ErrorHandlingMessage'


const CreateBillPopup = ({ onClose, locationID }) => {
    const [locationModel, setLocationModel] = useState({
        id: 0,
        companyName: "",
        date: "",
        total: "",
        mughalGarderQ: "",
        mughalGarderP: "",
        mughalGarderT: "",

        crossPipeQ: "",
        crosspipeP: "",
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

        panelInstallStructureQ: "",
        panelInstallStructureP: "",
        panelInstallStructureG: "",
        panelInstallStructureST: "",
        panelInstallStructureGT: "",

    })


    const [loading, setLoading] = useState(false)

    const onhandleChange = (e) => {
        const { name, value } = e.target;
        let eventValue = value.replace(/^\s*/gm, '');   //// For remove space from start ///
        setLocationModel((prevmodel) => ({
            ...prevmodel,
            [name]: eventValue
        }))
    }

    // Validation Types
    const [validationModel, setValidationModel] = useState({
        companyNameError: null,
        dateError: null,
        mughalGarderPError: null,
        mughalGarderQError: null,
        crossPipeQError: null,
        crosspipePError: null,
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
        panelInstallStructureQError: null,
        panelInstallStructurePError: null,
        panelInstallStructureGError: null
    })


    const setValidation = () => {
        let validation_Obj = {
            ...validationModel,
            companyNameError: Validator(locationModel.companyName, [V_Type.required], ['Company Name is required'],),
            dateError: Validator(locationModel.date, [V_Type.required], ['Date is required'],),
            mughalGarderPError: Validator(locationModel.mughalGarderP, [V_Type.required], ['it is required'],),
            mughalGarderQError: Validator(locationModel.mughalGarderQ, [V_Type.required], ['it is required'],),
            crossPipeQError: Validator(locationModel.crossPipeQ, [V_Type.required], ['it is required'],),
            crosspipePError: Validator(locationModel.crosspipeP, [V_Type.required], ['it is required'],),
            cChannelQError: Validator(locationModel.cChannelQ, [V_Type.required], ['it is required'],),
            cChannelPError: Validator(locationModel.cChannelP, [V_Type.required], ['it is required'],),
            basePlateQErrror: Validator(locationModel.basePlateQ, [V_Type.required], ['it is required'],),
            basePlatePErrror: Validator(locationModel.basePlateP, [V_Type.required], ['it is required'],),
            rawalBoltQErrror: Validator(locationModel.rawalBoltQ, [V_Type.required], ['it is required'],),
            rawalBoltPErrror: Validator(locationModel.rawalBoltP, [V_Type.required], ['it is required'],),
            nutBoltQErrror: Validator(locationModel.nutBoltQ, [V_Type.required], ['it is required'],),
            nutBoltPErrror: Validator(locationModel.nutBoltP, [V_Type.required], ['it is required'],),
            cutterDiskQErrror: Validator(locationModel.cutterDiskQ, [V_Type.required], ['it is required'],),
            cutterDiskPErrror: Validator(locationModel.cutterDiskP, [V_Type.required], ['it is required'],),
            weldingRodQError: Validator(locationModel.weldingRodQ, [V_Type.required], ['it is required'],),
            weldingRodPError: Validator(locationModel.weldingRodP, [V_Type.required], ['it is required'],),
            blackPaintQError: Validator(locationModel.blackPaintQ, [V_Type.required], ['it is required'],),
            blackPaintPError: Validator(locationModel.blackPaintP, [V_Type.required], ['it is required'],),
            sprayPaintQError: Validator(locationModel.sprayPaintQ, [V_Type.required], ['it is required'],),
            sprayPaintPError: Validator(locationModel.sprayPaintP, [V_Type.required], ['it is required'],),
            epoxyQError: Validator(locationModel.epoxyQ, [V_Type.required], ['it is required'],),
            epoxyPError: Validator(locationModel.epoxyP, [V_Type.required], ['it is required'],),
            nakkyQError: Validator(locationModel.nakkyQ, [V_Type.required], ['it is required'],),
            nakkyPError: Validator(locationModel.nakkyP, [V_Type.required], ['it is required'],),
            miliDiskQError: Validator(locationModel.miliDiskQ, [V_Type.required], ['it is required'],),
            miliDiskPError: Validator(locationModel.miliDiskP, [V_Type.required], ['it is required'],),
            angelQError: Validator(locationModel.angelQ, [V_Type.required], ['it is required'],),
            angelPError: Validator(locationModel.angelP, [V_Type.required], ['it is required'],),
            topPlateQError: Validator(locationModel.topPlateQ, [V_Type.required], ['it is required'],),
            topPlatePError: Validator(locationModel.topPlateP, [V_Type.required], ['it is required'],),
            panelInstallStructureQError: Validator(locationModel.panelInstallStructureQ, [V_Type.required], ['it is required'],),
            panelInstallStructurePError: Validator(locationModel.panelInstallStructureP, [V_Type.required], ['it is required'],),
            panelInstallStructureGError: Validator(locationModel.panelInstallStructureG, [V_Type.required], ['it is required'],),

        }
        setValidationModel(validation_Obj)
     
       return Validator(validation_Obj, V_Type.NullCheck);
    }

    const clearAllFields = () => {
        setLocationModel(prevState => {
          const newState = { ...prevState };
          for (const key in newState) {  
            newState[key] = "";
          }
          return newState;
        });
      };
      
    const clearFields = () => {
        setLocationModel(prevState => {
          const newState = { ...prevState };
          for (const key in newState) {
            if (key.endsWith("Q") && !key.endsWith("P")) {
              newState[key] = "";
            }
          }
          return newState;
        });
      };

 
    const onAddBill = async () => {
        let my_validation = setValidation();
        if (my_validation) {
          // Handle validation error
        } else {
          try {
            // Calculate the T values
            const updatedLocationModel = {
              ...locationModel,
              mughalGarderT: String(Number(locationModel.mughalGarderQ) * Number(locationModel.mughalGarderP)),
              crossPipeT: String(Number(locationModel.crossPipeQ) * Number(locationModel.crosspipeP)),
              cChannelT: String(Number(locationModel.cChannelQ) * Number(locationModel.cChannelP)),
              basePlateT: String(Number(locationModel.basePlateQ) * Number(locationModel.basePlateP)),
              rawalBoltT: String(Number(locationModel.rawalBoltQ) * Number(locationModel.rawalBoltP)),
              nutBoltT: String(Number(locationModel.nutBoltQ) * Number(locationModel.nutBoltP)),
              cutterDiskT: String(Number(locationModel.cutterDiskQ) * Number(locationModel.cutterDiskP)),
              weldingRodT: String(Number(locationModel.weldingRodQ) * Number(locationModel.weldingRodP)),
              blackPaintT: String(Number(locationModel.blackPaintQ) * Number(locationModel.blackPaintP)),
              sprayPaintT: String(Number(locationModel.sprayPaintQ) * Number(locationModel.sprayPaintP)),
              epoxyT: String(Number(locationModel.epoxyQ) * Number(locationModel.epoxyP)),
              nakkyT: String(Number(locationModel.nakkyQ) * Number(locationModel.nakkyP)),
              miliDiskT: String(Number(locationModel.miliDiskQ) * Number(locationModel.miliDiskP)),
              angelT: String(Number(locationModel.angelQ) * Number(locationModel.angelP)),
              topPlateT: String(Number(locationModel.topPlateQ) * Number(locationModel.topPlateP)),
              panelInstallStructureST: String(Number(locationModel.panelInstallStructureQ) * Number(locationModel.panelInstallStructureP)),
              panelInstallStructureGT: String(Number(locationModel.panelInstallStructureQ) * Number(locationModel.panelInstallStructureP) * Number(locationModel.panelInstallStructureG)),
              
            };
      
            const payload = {
              locationModel: updatedLocationModel
            };
      
            setLoading(true);
            const response = await axios.post('http://localhost:3001/api/save', payload, {
              headers: {
                'Content-Type': 'application/json'
              },
            });
            const data = response.data;
            if (data.success) {
              toast.success("Data saved successfully");
              onClose();
            } else {
              toast.error("Error saving data");
            }
            setLoading(false);
          } catch (error) {
            ErrorHandlingMessage(error);
            setLoading(false);
          }
        }
      };
      
      

    useEffect(() => {
        if (locationID) {
            (async () => {
                setLoading(true)
                try {

                    setLoading(false)
                } catch (error) {
                    ErrorHandlingMessage(error)
                }
            })();
        }
    }, [locationID])

    return (
        <div>
            {/* {loading && <FullPageLoader allowFullScreen={true} />} */}
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                        <div className="relative max-w-6xl overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full">
                            <div className="bg-white ">
                                <div className="flex justify-between px-4 py-4 border-b-2">
                                    <h2 className='text-xl font-semibold'>{locationID ? 'Update Bill' : 'Add Bill'}</h2>
                                    <button onClick={onClose} className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2">
                                        <GrClose className='text-indigo-500 ' />
                                    </button>
                                </div>
                                {/* 
                                <div  className='rtl-container'> */}
                                <div className="grid grid-cols-12 gap-4 px-4 py-4">

                                    <div className="col-span-12 md:col-span-6">
                                        <CustomInput name={"companyName"} value={locationModel.companyName} onChange={onhandleChange} label="Company Name" type="text" placeholder="کمپنی کا نام" required={true} />
                                        {validationModel.companyNameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <CustomInput name={"date"} value={locationModel.date} onChange={onhandleChange} label="Date" type="date" required={true} />
                                        {validationModel.dateError}
                                    </div>


                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-2xl font-bold text-center'>Title</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <h1 className='mt-2 text-2xl font-bold text-center'>Quantity</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <h1 className='mt-2 text-2xl font-bold text-center'>Price</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-2xl font-bold text-end'>Total</h1>
                                    </div>
                                    {/*  */}


                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Mughal Garder</h1>

                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"mughalGarderQ"} value={locationModel.mughalGarderQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.mughalGarderQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"mughalGarderP"} value={locationModel.mughalGarderP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.mughalGarderPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.mughalGarderQ * locationModel.mughalGarderP}</h1>
                                    </div>
                                    {/*  */}


                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Cross Pipe</h1>
                                       
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"crossPipeQ"} value={locationModel.crossPipeQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.crossPipeQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"crosspipeP"} value={locationModel.crosspipeP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.crosspipePError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.crossPipeQ * locationModel.crosspipeP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>C channel</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"cChannelQ"} value={locationModel.cChannelQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.cChannelQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"cChannelP"} value={locationModel.cChannelP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.cChannelPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.cChannelQ * locationModel.cChannelP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Base Plate 8x8 (5mm)</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"basePlateQ"} value={locationModel.basePlateQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.basePlateQErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"basePlateP"} value={locationModel.basePlateP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.basePlatePErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.basePlateQ * locationModel.basePlateP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Rawal Bolt</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"rawalBoltQ"} value={locationModel.rawalBoltQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.rawalBoltQErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"rawalBoltP"} value={locationModel.rawalBoltP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.rawalBoltPErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.rawalBoltQ * locationModel.rawalBoltP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Nut Bolt</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"nutBoltQ"} value={locationModel.nutBoltQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nutBoltQErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"nutBoltP"} value={locationModel.nutBoltP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nutBoltPErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.nutBoltQ * locationModel.nutBoltP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Cutter Disk</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"cutterDiskQ"} value={locationModel.cutterDiskQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.cutterDiskQErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"cutterDiskP"} value={locationModel.cutterDiskP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.cutterDiskPErrror}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.cutterDiskQ * locationModel.cutterDiskP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Welding Rod</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"weldingRodQ"} value={locationModel.weldingRodQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.weldingRodQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"weldingRodP"} value={locationModel.weldingRodP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.weldingRodPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.weldingRodQ * locationModel.weldingRodP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Black Paint</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"blackPaintQ"} value={locationModel.blackPaintQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.blackPaintQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"blackPaintP"} value={locationModel.blackPaintP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.blackPaintPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.blackPaintQ * locationModel.blackPaintP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Spray Paint</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"sprayPaintQ"} value={locationModel.sprayPaintQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.sprayPaintQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"sprayPaintP"} value={locationModel.sprayPaintP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.sprayPaintPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.sprayPaintQ * locationModel.sprayPaintP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Epoxy</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"epoxyQ"} value={locationModel.epoxyQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.epoxyQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"epoxyP"} value={locationModel.epoxyP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.epoxyPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.epoxyQ * locationModel.epoxyP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Nakky</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"nakkyQ"} value={locationModel.nakkyQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nakkyQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"nakkyP"} value={locationModel.nakkyP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nakkyPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.nakkyQ * locationModel.nakkyP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Mili Disk</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"miliDiskQ"} value={locationModel.miliDiskQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.miliDiskQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"miliDiskP"} value={locationModel.miliDiskP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.miliDiskPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.miliDiskQ * locationModel.miliDiskP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Angel</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"angelQ"} value={locationModel.angelQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.angelQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"angelP"} value={locationModel.angelP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.angelPError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.angelQ * locationModel.angelP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Top Plate</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"topPlateQ"} value={locationModel.topPlateQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.topPlateQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"topPlateP"} value={locationModel.topPlateP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.topPlatePError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.topPlateQ * locationModel.topPlateP}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    <div className="col-span-12 border-t-2 md:col-span-8">
                                        <h1 className='text-2xl font-semibold text-end'>TOTAL</h1>
                                    </div>
                                    <div className="col-span-12 border-t-2 md:col-span-4">
                                        <h1 className='text-2xl font-semibold text-green-700 text-end'>{Object.keys(locationModel).filter(k => !k.endsWith('Q')).reduce((accumulator, key) => {
                                            if (key.endsWith('P')) {
                                                accumulator += (locationModel[key] || 0) * (locationModel[key.slice(0, key.length - 1) + 'Q'] || 0)
                                            }
                                            return accumulator
                                        }, 0)}</h1>
                                    </div>
                                    {/*  */}


                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Panel Install Structure</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput name={"panelInstallStructureQ"} value={locationModel.panelInstallStructureQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.panelInstallStructureQError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput name={"panelInstallStructureP"} value={locationModel.panelInstallStructureP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.panelInstallStructurePError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.panelInstallStructureQ * locationModel.panelInstallStructureP}</h1>
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <CustomInput name={"panelInstallStructureG"} value={locationModel.panelInstallStructureG} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.panelInstallStructureGError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.panelInstallStructureQ * locationModel.panelInstallStructureP * locationModel.panelInstallStructureG}</h1>
                                    </div>
                                    {/*  */}

                                    {/*  */}
                                    {/* <div className="col-span-12 border-t-2 md:col-span-8">
                                        <h1 className='text-2xl font-semibold text-end'>Grand Total</h1>
                                    </div>
                                    <div className="col-span-12 border-t-2 md:col-span-4">
                                        <h1 className='text-2xl font-semibold text-green-700 text-end'>{ }</h1>
                                    </div> */}
                                    {/*  */}

                                </div>

                                <div className="flex justify-end px-4 py-4 border-t-2">
                                    <CustomButton onClick={onAddBill} text={locationID ? "Update" : "Save"} />
                                    <button onClick={onClose} className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2"> Cancel</button>
                                    <button onClick={clearFields} className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2">Clear All Quantities</button>
                                    <button onClick={clearAllFields} className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2">Clear All Fields</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBillPopup
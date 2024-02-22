import React, { useState, useEffect } from 'react'
import CustomButton from '../../common/CustomButton'
import CustomInput from '../../common/CustomInput'
import { GrClose } from 'react-icons/gr'
import { toast } from 'react-toastify'
import Validator, { ValidationTypes as V_Type, } from 'react-form-supervalidator';
import { ErrorHandlingMessage } from '../../Utils/ErrorHandlingMessage'


const CreateBillPopup = ({ onClose, locationID }) => {
    const [locationModel, setLocationModel] = useState({
        id: 0,
        companyName: "",
        date : "",
        mughalGarderQ : "",
        mughalGarderP : "",
        mughalGarderT : "",

        crossPipeQ : "",
        crosspipeP : "",
        crossPipeT : ""
      
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

    })


    const setValidation = () => {
        let validation_Obj = {
            ...validationModel,
            companyNameError: Validator(locationModel.companyName, [V_Type.required], ['Company Name is required'],),
            dateError: Validator(locationModel.date, [V_Type.required], ['Date is required'],),
            mughalGarderPError: Validator(locationModel.mughalGarderP, [V_Type.required], ['it is required'],),
            mughalGarderQError: Validator(locationModel.mughalGarderQ, [V_Type.required], ['it is required'],),

        }
        setValidationModel(validation_Obj)
        return Validator(validation_Obj, V_Type.NullCheck);
    }

    
    const onAddBill = async () => {
        let my_validation = setValidation();
        if (my_validation) {
        }
        else {
            try {
                const payload = {
                    addedBy: "",
                    addedDate: "2023-04-06T04:52:30.115Z",
                    updatedBy: "",
                    updatedDate: "",
                    inActive: false,
                    inActiveReason: "",
                    inActiveBy: "",
                    inActiveDate: "",

                }
                setLoading(true)
                setLoading(false)
                toast.success("")
                onClose()
                setLoading(false)
            } catch (error) {
                ErrorHandlingMessage(error)
                setLoading(false)
            }
        }
    }

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
                                        {validationModel.nameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <CustomInput name={"date"} value={locationModel.date} onChange={onhandleChange} label="Date" type="date" required={true} />
                                        {validationModel.nameError}
                                    </div>


                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Mughal Garder</h1>
                                        {validationModel.nameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"mughalGarderQ"} value={locationModel.mughalGarderQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"mughalGarderP"} value={locationModel.mughalGarderP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.mughalGarderQ * locationModel.mughalGarderP}</h1>
                                    </div>
                                    {/*  */}


                                    {/*  */}
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-center'>Mughal Garder</h1>
                                        {validationModel.nameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"crossPipeQ"} value={locationModel.crossPipeQ} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <CustomInput name={"crosspipeP"} value={locationModel.crosspipeP} onChange={onhandleChange} type="number" required={true} />
                                        {validationModel.nameError}
                                    </div>
                                    <div className="col-span-12 md:col-span-2">
                                        <h1 className='mt-2 text-end'>{locationModel.crossPipeQ * locationModel.crosspipeP}</h1>
                                    </div>
                                    {/*  */}



                                    {/*  */}
                                    <div className="col-span-12 border-t-2 md:col-span-8">
                                        <h1 className='text-2xl font-semibold text-end'>TOTAL</h1>
                                    </div>
                                    <div className="col-span-12 border-t-2 md:col-span-4">
                                        <h1 className='text-2xl font-semibold text-green-700 text-end'>{}</h1>
                                    </div>
                                    {/*  */}



                                </div>
                              
                                <div className="flex justify-end px-4 py-4 border-t-2">
                                    <CustomButton onClick={onAddBill} text={locationID ? "Update" : "Save"} />
                                    <button onClick={onClose} className="p-1.5 shrink-0 rounded border border-slate-200 hover:border-slate-300 shadow-sm ml-2"> Cancel</button>
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
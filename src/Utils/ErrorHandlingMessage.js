import { toast } from "react-toastify"

export const ErrorHandlingMessage = (error) => {

    if (error.response) {
        if (error.response.data.errors) {
            for (const errr in error.response.data.errors) {
                toast.error(`${errr}: ${error.response.data.errors[errr]} `)
            }
        } else if (error.response.data) {
            toast.error(error.response.data.responseMessage)
        }
    }
    else {
        for (const key in error) {
            if (error[key]) {
                toast(({ closeToast }) => <div> {error[key]}</div>, { type: "error" });
            }
        }
    }
}

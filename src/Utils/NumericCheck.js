const handleNumericCheck = (event, allowfloat = "", maxFloat) => {
  const { value } = event.target;
  const regex = new RegExp(`^\\d+(\\.\\d{0,${maxFloat}})?$`);
  // const regex = /^\d+(\.\d{0,2})?$/;

  var charCode = event.which ? event.which : event.keyCode;
  if (charCode === 46) {
    //Check if event.target.value  already contains the . character
    if (event.target.value.indexOf(".") === -1) {
      if (allowfloat === "allowFloat") {
        return true;
      }
      event.preventDefault();
      return false;
    } else {
      event.preventDefault();
      return false;
    }
  } else {
    if (charCode >= 48 && charCode <= 57) {
      if (maxFloat) {
        if (document.getSelection().toString().length > 0) {
          return true;
        } else {
          if (regex.test(value) || value === "") {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      } else {
        return true;
      }
    } else {
      event.preventDefault();
      return false;
    }
  }
};
export default handleNumericCheck;

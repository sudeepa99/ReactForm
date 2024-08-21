

export default function Validation(formData) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+]*[0-9]{1,3}[ -]*\(?[0-9]{1,4}\)?[ -]*[0-9]{1,4}[ -]*[0-9]{1,9}$/;

    if(formData.firstName ===""){
        errors.firstName ="First Name is required!";
    }

    if(formData.lastName ===""){
        errors.lastName ="Last Name is required!";
    }

    if(formData.email ===""){
        errors.email ="Email is required!";
    }
    else if(!email_pattern.test(formData.email)){
        errors.email = "Invalid Email format";
    }

    if(formData.age ===""){
        errors.age ="Age is required";
    }

    if(formData.phoneNumber ===""){
        errors.phoneNumber ="Phone Number is required";
    }
    else if(!phonePattern.test(formData.phoneNumber)){
        errors.phoneNumber = "Invalid Phone Number Format";
    }
    
    

  return errors;
}


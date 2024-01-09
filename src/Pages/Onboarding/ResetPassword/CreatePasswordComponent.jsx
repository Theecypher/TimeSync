import { useEffect, useState } from "react";
import CreatePassword from "./CreatePassword";
import axios from "axios";
import useStore from "../../../zustand-store/store";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ResetComponentPassword = () => {
  const [psswrdDetails, setPsswrdDetails] = useState({
    psswrd: "",
    confirmPsswrd: "",
  });
  const [error, setError] = useState(null);
  const [psswrdError, setPsswrdError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { baseUrl, newToken } = useStore();
  const navigateTo = useNavigate();

  useEffect(() => {
    console.log(newToken);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPsswrdDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({ ...prev, [name]: "" }));
    if (e.target.name === "psswrd") {
      let password = e.target.value;
      const psswrdValidate = handleValidation(password);
      setPsswrdError(psswrdValidate);
    }
  };

  const handleValidation = (password) => {
    const errors = {};
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;
    const upperCase = /[A-Z]/;

    if (!password || password.length < 8) {
      errors.length = "cannot be less than 8 characters";
    }
    if (!password || regex.test(password) == false) {
      errors.test = "must include numbers and symbols";
    }
    if (!password || upperCase.test(password) == false) {
      errors.upperCase = "must iclude an uppercase letters";
    }
    return errors;
  };

  const ConfirmPassword = () => {
    const errors = {};

    if (psswrdDetails.confirmPsswrd !== psswrdDetails.psswrd) {
      errors.confirmPsswrd = "Password does not match!";
    }
    return errors;
  };

  const headers = {
    Authorization: `${newToken}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validatePassword = handleValidation(psswrdDetails.psswrd);
    const validatedCnfirmPsswrd = ConfirmPassword();

    if (
      Object.keys(validatePassword).length === 0 &&
      Object.keys(validatedCnfirmPsswrd).length === 0
    ) {
      console.log(psswrdDetails);
      setLoading(true);
      axios
        .post(
          `${baseUrl}/auths/reset-password`,
          {
            password: psswrdDetails.psswrd,
            confirmPassword: psswrdDetails.confirmPsswrd,
          },
          {
            headers,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("New password created successfully!");
          setLoading(false);
          navigateTo("/");
        })
        .catch((err) => {
          toast.error("Password Incorrect");
          setLoading(false);
        });

      setError(validatePassword);
      toast.warning("Password does not match!");
    }
  };

  return (
    <CreatePassword
      psswrdDetails={psswrdDetails}
      handleSubmit={handleSubmit}
      psswrdError={psswrdError}
      loading={loading}
      error={error}
      handleChange={handleChange}
    />
  );
};

export default ResetComponentPassword;

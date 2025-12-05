import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema, LoginFormInputs } from "../schemes/loginSchema";
import { useLoginMutation } from "@app/auth/authApi";

export type FormErrors = {
  [key in keyof LoginFormInputs]?: string;
};

const useLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormInputs>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [login, { isLoading,reset }] = useLoginMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof LoginFormInputs;
        newErrors[path] = issue.message;
      });

      return setErrors(newErrors);
    }

    login(formData).unwrap().then((response)=>{
      localStorage.setItem("t", response.t);
      localStorage.setItem("rt", response.rt);
      reset();
      navigate("app/inbox");
    })
  };

  return {
    handleSubmit,
    handleChange,
    errors,
    isLoading,
  };
};

export default useLoginForm;

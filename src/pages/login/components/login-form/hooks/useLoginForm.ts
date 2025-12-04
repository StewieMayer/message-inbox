import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema, LoginFormInputs } from "../schemes/loginSchema";

export type FormErrors = {
  [key in keyof LoginFormInputs]?: string;
};

const useLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormInputs>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      setIsLoading(false);
      const newErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof LoginFormInputs;
        newErrors[path] = issue.message;
      });

      return setErrors(newErrors);
    }

    setTimeout(() => {
      setIsLoading(false);
      setErrors({});
      navigate("app/inbox");
    }, 5000);
  };

  return {
    handleSubmit,
    handleChange,
    errors,
    isLoading,
  };
};

export default useLoginForm;

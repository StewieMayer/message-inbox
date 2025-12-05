import { useIsLoggedInQuery } from "@app/auth/authApi";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { refetch: isLoggedInRefetch } = useIsLoggedInQuery();

  useEffect(() => {
    const handleCheckAuth = async () => {
      const result = await isLoggedInRefetch()
        .unwrap()
        .then((response) => {
          setIsAuthenticated(response.loggedIn);
        });
    };
    handleCheckAuth();
  }, []);

  return { isAuthenticated };
};

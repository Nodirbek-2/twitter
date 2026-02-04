import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextAuth = createContext(null);

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  let localA = localStorage.getItem("accessToken");
  let localR = localStorage.getItem("refreshToken");
  function authFunc(accessToken, refreshToken) {
    if (localA === accessToken && localR === refreshToken) {
      setIsAuth(true);
    }
  }
  authFunc();
  useEffect(() => {
    if (localA && localR) {
      setIsAuth(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  console.log("context", isAuth);
  return (
    <ContextAuth.Provider value={{ authFunc, isAuth }}>
      {children}
    </ContextAuth.Provider>
  );
};

export default AuthContext;

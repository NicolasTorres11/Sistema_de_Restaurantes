import React, { createContext } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;

  const login = async (token) => {
    console.log("Context Login-->", token);
  };

  const valueContext = {
    auth: null,
    login,
    logout: () => console.log("Realizando Logout.."),
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}

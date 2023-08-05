import React, { useEffect, useState, createContext } from "react";
import { setToken, getToken, deleteToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, Setauth] = useState(undefined);
  const { getMe } = useUser();

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (token) {
        const me = await getMe(token);
        Setauth({ token, me });
      } else {
        Setauth(null);
      }
    })();
  }, []);

  const login = async (token) => {
    setToken(token);
    const me = await getMe(token);
    Setauth({ token, me });
  };

  const logout = () => {
    if (auth) {
      deleteToken()
      Setauth(null)
    }
  }

  const valueContext = {
    auth,
    login,
    logout,
  };

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}

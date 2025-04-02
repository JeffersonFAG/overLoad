import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    const fakeToken = "fake-jwt-token";
    localStorage.setItem("fakeToken", fakeToken);
    setToken(fakeToken);
  };

  const logout = () => {
    localStorage.removeItem("fakeToken");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

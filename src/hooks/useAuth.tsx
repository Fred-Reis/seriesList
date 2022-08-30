import { createContext, useCallback, useState, useContext } from "react";

import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

interface AuthContextState {
  token: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider = ({ children }) => {
  const { getItem, setItem } = useAsyncStorage("@storage_play_series:auth");

  const [token, setToken] = useState(() => {
    var item;
    const getToken = async () => {
      item = await getItem();
    };

    getToken();

    const token = item != null ? JSON.parse(item) : false;

    if (token) {
      return token;
    }

    return false;
  });

  const signIn = useCallback(async () => {
    await setItem(JSON.stringify(true));

    setToken(true);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem("@storage_play_series:auth");

    setToken(false);
  }, []);

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("[useAuth] must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };

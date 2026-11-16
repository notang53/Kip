import { createContext, useCallback, useContext, useState } from "react";
import AuthModal from "./AuthModal";

const AuthModalContext = createContext(null);

export function AuthModalProvider({ children }) {
  const [mode, setMode] = useState(null);
  const openAuthModal = useCallback((nextMode = "login") => setMode(nextMode), []);
  const closeAuthModal = useCallback(() => setMode(null), []);

  return (
    <AuthModalContext.Provider value={openAuthModal}>
      {children}
      <AuthModal
        mode={mode}
        onModeChange={setMode}
        onClose={closeAuthModal}
      />
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const openAuthModal = useContext(AuthModalContext);

  if (!openAuthModal) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }

  return openAuthModal;
}

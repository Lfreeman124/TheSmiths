import { createContext, useContext } from "react";

export type GlobalContent = {
  showMenu: boolean;
  setShowMenu: any;
  isMobile: boolean;
};
export const UserContext = createContext<GlobalContent>({
  showMenu: false,
  setShowMenu: () => {},
  isMobile: false,
});
export const useGlobalContext = () => useContext(UserContext);

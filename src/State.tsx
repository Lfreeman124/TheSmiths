import { createContext, useContext } from "react";

export type GlobalContent = {
  showMenu: boolean;
  setShowMenu: any;
};
export const UserContext = createContext<GlobalContent>({
  showMenu: false,
  setShowMenu: () => {},
});
export const useGlobalContext = () => useContext(UserContext);

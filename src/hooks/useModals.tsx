import { useContext } from "react";
import { ModalsContext } from "../contexts/modals";

export const useModals = () => useContext(ModalsContext);
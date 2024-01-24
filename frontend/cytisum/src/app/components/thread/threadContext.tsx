import { createContext } from "react";
import { initialState } from "./threadReducer";

export const threadContext = createContext(initialState);
"use client"

import { createContext } from "react";
import { initialState } from "./threadSlice";

export const threadContext = createContext(initialState);
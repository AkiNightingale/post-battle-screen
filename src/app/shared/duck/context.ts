import React from "react";
import { RefreshContextType, UsersContextType } from "./types";

export const WinnersContext = React.createContext<UsersContextType>(
  {
    users: []
  }
);

export const LosersContext = React.createContext<UsersContextType>(
  {
    users: []
  }
);

export const RefreshContext = React.createContext<RefreshContextType>({  });
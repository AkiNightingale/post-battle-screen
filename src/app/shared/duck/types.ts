import React from "react";

export interface UserInfoType {
  id: number
  nickname: string
  currentUser: boolean
  kills: number
  deaths: number
  scores: number
  isAlive: boolean
  isFriendOfCurrent?: boolean
}

export interface UsersContextType {
  users: UserInfoType[];
}

export type SetRefresh = React.Dispatch<React.SetStateAction<boolean>>;

export interface RefreshContextType {
  refresh?: boolean;
  setRefresh?: SetRefresh;
}
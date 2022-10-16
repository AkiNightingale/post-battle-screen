import * as React from "react";
import axios from "axios";
import { UserInfoType } from "@shared/duck/types";

export const getWinners = async (
  setLoadingW: React.Dispatch<React.SetStateAction<boolean>>,
  setWinners: React.Dispatch<React.SetStateAction<UserInfoType[]>>,
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  await axios.get('http://localhost:3500/winners')
    .then(({ data }) => {
      if (data) {
        const sortedData = data.sort(
          (a: any, b: any) => {
            return b.score - a.score;
          }
        )
        setWinners(sortedData);
      }
    }).catch(error => error.response.data)
    .finally(() => {
      setLoadingW(false);
      if (setRefresh) {
        setRefresh(false);
      }
    });
}

export const getLosers = async (
  setLoadingL: React.Dispatch<React.SetStateAction<boolean>>,
  setLosers: React.Dispatch<React.SetStateAction<UserInfoType[]>>,
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  await axios.get('http://localhost:3500/losers')
    .then(({ data }) => {
      if (data) {
        const sortedData = data.sort(
          (a: any, b: any) => {
            return b.score - a.score;
          }
        )
        setLosers(sortedData);
      }
    }).catch(error => error.response.data)
    .finally(() => {
      setLoadingL(false);
      if (setRefresh) {
        setRefresh(false);
      }
    });
}
import * as React from "react";
import axios from "axios";
import { UserInfoType } from "@shared/duck/types";

export const getWinners = async (
  setWinners: React.Dispatch<React.SetStateAction<UserInfoType[]>>,
  setLoadingW?: React.Dispatch<React.SetStateAction<boolean>>,
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (setLoadingW) {
    setLoadingW(true);
  }

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
    })
    .catch(error => error.response.data)
    .finally(() => {
      if (setLoadingW) {
        setLoadingW(false);
      }
      if (setRefresh) {
        setRefresh(false);
      }
    });
}

export const getLosers = async (
  setLosers: React.Dispatch<React.SetStateAction<UserInfoType[]>>,
  setLoadingL?: React.Dispatch<React.SetStateAction<boolean>>,
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (setLoadingL) {
    setLoadingL(true);
  }

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
      if (setLoadingL) {
        setLoadingL(false);
      }
      if (setRefresh) {
        setRefresh(false);
      }
    });
}
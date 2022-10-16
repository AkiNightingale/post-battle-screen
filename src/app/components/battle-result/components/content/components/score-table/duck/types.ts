import { sharedTypes } from "@shared/duck";

export interface ScoreTableProps {
  loading: boolean;
  data: sharedTypes.UserInfoType[];
}
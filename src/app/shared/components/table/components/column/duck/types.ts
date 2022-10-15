import React from "react";

export interface ColumnProps {
  dataKey: string;
  label: string;
  render?: (value: any, record: any) => React.ReactNode | React.ReactElement;
  sortKey?: string;
  sortable?: boolean;
  reverseOrder?: boolean;

  [key: string]: any;
}

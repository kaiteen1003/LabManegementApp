import React, { useState } from "react";
import CustomToolbar from "./CustomToolbar";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },

  {
    field: "schoolGrade",
    headerName: "SchoolGrade",
    width: 160,
  },
  {
    field: "slackId",
    headerName: "SlackId",
    width: 160,
  },
];

interface rowType {
  id: number;
  lastName: string;
  firstName: string;
  schoolGrade: string;
  slackId: string;
}
const paginationModel = { page: 0, pageSize: 5 };

const Irows: rowType[] = [
  {
    id: 1,
    lastName: "悟",
    firstName: "五条",
    schoolGrade: "Teacher",
    slackId: "d",
  },
  {
    id: 2,
    lastName: "雄二",
    firstName: "虎杖",
    schoolGrade: "B4",
    slackId: "d",
  },
  {
    id: 3,
    lastName: "優斗",
    firstName: "野村",
    schoolGrade: "M1",
    slackId: "d",
  },
];

const List = () => {
  const [rows, setRows] = useState<rowType[]>(Irows);
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

  const handleSelectionChange = (rowSelectionModel: GridRowSelectionModel) => {
    setSelectedRows(rowSelectionModel);
    console.log("Selected rows:", rowSelectionModel);
  };
  // onDelete関数をListコンポーネント内に定義
  const onDelete = () => {
    setRows((prevRows) =>
      prevRows.filter((row) => !selectedRows.includes(row.id))
    );
    setSelectedRows([]); // 選択をクリア
  };
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange}
        sx={{ border: 0 }}
        slots={{
          toolbar: () => <CustomToolbar onDelete={onDelete} />, // onDeleteを渡す
        }}
      />
    </Paper>
  );
};

export default List;

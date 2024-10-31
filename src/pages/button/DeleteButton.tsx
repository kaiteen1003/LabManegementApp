import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteButtonProps } from "../../types/type";

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <Button onClick={onDelete}>
      <DeleteIcon color="primary" fontSize="small" />
      delete
    </Button>
  );
};

export default DeleteButton;

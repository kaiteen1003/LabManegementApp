import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import DeleteButton from "../button/DeleteButton";
import { DeleteButtonProps } from "../../types/type";

const CustomToolbar: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarExport />
      <GridToolbarDensitySelector />
      <GridToolbarFilterButton />
      <DeleteButton onDelete={onDelete} />
    </GridToolbarContainer>
  );
};

export default CustomToolbar;

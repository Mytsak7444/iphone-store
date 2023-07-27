import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FC } from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IPhone } from "../../Interface/Interface";
import { addItemToCart } from "../../Redux/cart/reducer";
import { useAppDispatch } from "../../Redux/hooks";

interface IPhoneItemProps {
  data: IPhone[];
}


// елемент в каталозі
const PhoneItem: FC<IPhoneItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <TableContainer sx={{ mt: "80px" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Table size="small" style={{ maxWidth: "750px" }}>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Memory</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow key={el.id}>
                <TableCell>{el.id}</TableCell>
                <TableCell>{el.model}</TableCell>
                <TableCell>{el.memory} GB</TableCell>
                <TableCell>{el.color}</TableCell>
                <TableCell>{el.price}$</TableCell>
                <TableCell>
                  <AddCircleOutlineIcon
                    onClick={() => dispatch(addItemToCart(el))}
                    sx={{ cursor: "pointer" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </TableContainer>
  );
};

export default PhoneItem;

import CloseIcon from "@mui/icons-material/Close";
import { ListItem, TableBody, TableCell } from "@mui/material";
import { FC } from "react";
import { ICartItem } from "../../Interface/Interface";
import {
  onDecrease,
  onIncrease,
  removeItemFromCart,
} from "../../Redux/cart/reducer";
import { useAppDispatch } from "../../Redux/hooks";

interface ICartItemProps {
  order: ICartItem;
}

// елемент в корзині
const BasketItem: FC<ICartItemProps> = ({ order }) => {
  const dispatch = useAppDispatch();

  return (
    <ListItem>
      <TableBody>
        <TableCell>{order.model}</TableCell>
        <TableCell>{order.price * order.count}$</TableCell>
        <TableCell
          onClick={() => dispatch(onIncrease(order.id))}
          sx={{ cursor: "pointer" }}
        >
          +
        </TableCell>
        <TableCell>{order.count}</TableCell>
        <TableCell
          onClick={() => dispatch(onDecrease(order.id))}
          sx={{ cursor: "pointer" }}
        >
          -
        </TableCell>
        <TableCell>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={() => dispatch(removeItemFromCart(order.id))}
          />
        </TableCell>
      </TableBody>
    </ListItem>
  );
};

export default BasketItem;

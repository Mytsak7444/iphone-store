import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../Redux/hooks";
import BasketItem from "../BasketItem/BasketItem";

interface IBasketProps {
  cartOpen: boolean;
  closeCart: () => void;
}

// корзина
const Basket: FC<IBasketProps> = ({ cartOpen, closeCart }) => {
  const orders = useAppSelector((state) => state.cart.itemInCart);

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "400px", padding: "10px" }}>
        <ListItemIcon>
          <ShoppingCartIcon />
          <ListItemText>Cart</ListItemText>
        </ListItemIcon>
        <Divider />
        {/* перевірка корзини на порожність */} 
        {!orders.length ? (
          <Typography sx={{ padding: "10px" }}>Cart is empty</Typography>
        ) : (
          orders.map((el) => <BasketItem order={el} />)
        )}
        {/* підрахунок загальної суми */} 
        <Typography>
          Total price:{" "}
          {orders.reduce((acc, item) => {
            return acc + item.price * item.count;
          }, 0)}
          $
        </Typography>
      </List>
    </Drawer>
  );
};

export default Basket;

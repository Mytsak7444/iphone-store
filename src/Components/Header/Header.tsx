import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface IHeaderProps {
  openCart: () => void;
}

const Header: FC<IHeaderProps> = ({ openCart }) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Iphone Store</Typography>
        <IconButton color="inherit">
          <ShoppingCartIcon onClick={openCart} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

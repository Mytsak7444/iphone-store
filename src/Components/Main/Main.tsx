import axios from "axios";
import { useEffect, useState } from "react";
import { IPhone } from "../../Interface/Interface";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setPhones } from "../../Redux/phones/reducer";
import Basket from "../Basket/Basket";
import Header from "../Header/Header";
import PhoneItem from "../PhoneItem/PhoneItem";

export default function Main() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const phones = useAppSelector((state) => state.phones.phones);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchPhones();
  }, []);

  // отримання даних з АРІ
  async function fetchPhones() {
    try {
      const res = await axios.get<IPhone[]>("http://localhost:3001/phones");
      dispatch(setPhones(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header openCart={() => setIsCartOpen(true)} />
      <PhoneItem data={phones} />
      <Basket cartOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
    </div>
  );
}

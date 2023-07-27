export interface IPhone {
  id: number;
  model: string;
  memory: number;
  color: string;
  price: number;
  count: number;
}

export interface ICartItem {
  id: number;
  model: string;
  price: number;
  count: number;
}

export interface ICartState {
  itemInCart: ICartItem[];
}

export interface IPhoneItem {
  id: number;
  model: string;
  memory: number;
  color: string;
  price: number;
  count: number;
}

export interface IPhoneState {
  phones: IPhoneItem[];
}

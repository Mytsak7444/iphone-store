import { ICartItem } from "../Interface/Interface";

// зберігання даних в localStorage
export const saveToStorage = (key: string, data: ICartItem[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// отримання даних з localStorage
export const getFromStorage = (key: string): string | null => {
  const data = localStorage.getItem(key);
  return data !== null ? data : null;
};

import { createSlice } from "@reduxjs/toolkit/dist";
import { IPhoneState } from "../../Interface/Interface";

const initialState: IPhoneState = {
  phones: [],
};

const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {
    // встановлення даних з API
    setPhones(state, action) {
      state.phones = action.payload;
    },
  },
});

export const { setPhones } = phonesSlice.actions;
export default phonesSlice.reducer;

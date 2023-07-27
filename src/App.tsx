import { Provider } from "react-redux";
import Main from "./Components/Main/Main";
import { store } from "./Redux";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

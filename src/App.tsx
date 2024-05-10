import { Provider } from "react-redux";
import "./assets/sass/_globas.scss";
import ArgentBankAppRoutes from "./components/routes/ArgentBankAppRoutes";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ArgentBankAppRoutes />
    </Provider>
  );
}

export default App;

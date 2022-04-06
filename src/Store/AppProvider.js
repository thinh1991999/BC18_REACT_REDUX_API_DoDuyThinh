import { createStore } from "redux";
import { Provider } from "react-redux";
import { DssvReducer } from "./DssvReducer/DssvReducer";

function AppProvider({ children }) {
  const store = createStore(
    DssvReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;

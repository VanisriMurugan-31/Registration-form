import { Provider } from "react-redux";
import Register from "./Pages/RegisterForm";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Register />
    </Provider>
  );
}

export default App;

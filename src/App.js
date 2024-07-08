import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
function App() {
  return (
    <div className="text-2xl">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;

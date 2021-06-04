import {render} from "react-dom";
import {Provider} from "react-redux";
import {store} from "@/redux/rootStore";
import App from './App';
import "@/assets/style/public.css";



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


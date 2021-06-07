import {render} from "react-dom";
import {Provider} from "react-redux";
import {store} from "@/redux/rootStore";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import "@/assets/style/public.css";
import "animate.css";

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


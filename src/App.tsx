import { Route, Redirect } from "react-router-dom";
import {Fragment} from "react";

import { Home, List, Detail } from "@/pages"

function App() {
  return (
    <Fragment>
        <Route path="/home" children={() => <Home/>} />
        <Route path="/list" children={() => <List/>} />
        <Route path="/detail" children={() => <Detail/>} />
        <Redirect from="/" to="/home" />
    </Fragment>
  );
}

export default App;

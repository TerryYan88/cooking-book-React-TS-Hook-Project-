import {Switch,Route,Redirect} from "react-router-dom";
import {Home,List} from "@/pages"

function App() {
  return (
    <Switch>
      <Route path="/home" render={()=><Home/>}/>
      <Route path="/list" render={()=><List/>}/>
      <Redirect from="/" to="/home"/>
    </Switch>
  );
}

export default App;

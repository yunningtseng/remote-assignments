import { Switch, Route, Redirect } from "react-router-dom";

import Week1 from "@week1/App";

function App() {
  return (
    <Switch>
      <Route path="/week-1" exact>
        <Week1 />
      </Route>
      <Route path="*">
        <Redirect to="/week-1" />
      </Route>
    </Switch>
  );
}

export default App;

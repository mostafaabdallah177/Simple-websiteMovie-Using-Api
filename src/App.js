import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Proudect from "./Proudect/proudect";
import ProudectDetiles from "./Proudect/proudectDetiles";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Proudect} />
          <Route
            path="/ProudectDetiles/:id"
            exact
            component={ProudectDetiles}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

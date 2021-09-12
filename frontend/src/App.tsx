import { Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { TodoList } from "./Pages/TodoList/TodoList";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/list">
            <TodoList />
          </Route>
          <Route path="/" exact>
            <Redirect to="/list" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

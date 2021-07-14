import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import ViewEmployee from "./components/ViewEmployee";
import { UserProvider } from "./Context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DeleteEmployee from "./components/DeleteEmployee";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={AddEmployee} />
            <Route path="/editEmployee/:id" component={EditEmployee} />
            <Route path="/viewEmployee" component={ViewEmployee} />
            <Route path="/deleteEmployee/:id" component={DeleteEmployee} />
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;

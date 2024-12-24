import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterContent from "./components/RegisterContent";
import TransferOwnership from "./components/TransferOwnership";
import ContentDetails from "./components/ContentDetails";
import UserContents from "./components/UserContents";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={RegisterContent} />
          <Route path="/transfer" component={TransferOwnership} />
          <Route path="/content/:contentHash" component={ContentDetails} />
          <Route path="/user/:owner" component={UserContents} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

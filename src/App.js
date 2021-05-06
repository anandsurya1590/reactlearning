import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import RouterDemo from "./components/RouterDemo";
import Shop from "./components/Shop";
import Error from "./components/Error";
import "./styles.css";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={RouterDemo} />
        <Route path="/about" component={About} />
        <Route path="/shop/:name/:lname" component={Shop} />
        <Route component={Error} />
      </Switch>
      {/* <About />
      <Shop /> */}
    </>
  );
}

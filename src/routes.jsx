import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import ClassComponent from "./component/classComponent";
import FunctionComponent from "./component/FunctionComponent";
import Redux from "./component/Redux";
import Home from "./layout/Home";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route>
                    <Home>
                        <Switch>
                            <Route exact path='/class' component={ClassComponent} />
                            <Route exact path='/function' component={FunctionComponent} />
                            <Route exact path='/redux' component={Redux} />
                        </Switch>
                    </Home>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;
import { Redirect, Route } from "react-router";

export default function ProtectedRoute(props) {

    return(
        <Route>
            {
                () => props.loggedIn ? props.children : <Redirect to="/" />
            }
        </Route>
    );
}
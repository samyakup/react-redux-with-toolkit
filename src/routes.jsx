import { useRoutes } from "react-router"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"

const Routes = () => {

    return useRoutes([
        {
            path:'/',
            element: <Home />
        },
        {
            path: '/sign-in',
            element: <SignIn />
        }
    ])
}


export default Routes

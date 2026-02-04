import { useContext } from "react";
import { ContextAuth } from "../context/authContext";
import AppRouter from "./AppRoute";
import LoginPage from "../pages/loginPage";

const App = () => {
    const { isAuth } = useContext(ContextAuth);
    return <>{isAuth ? <AppRouter /> : <LoginPage />}</>;
};
export default App;

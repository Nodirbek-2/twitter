import { Link, Route, Routes } from "react-router-dom";
import { menu } from "../constants/menudata";
import "./app.css";
import { routes } from "../constants/routes";
import { Icons } from "../constants/icons";
import user from "../assets/images/user.png";
const AppRouter = () => {
  return (
    <>
      <main>
        <section className="menu">
          <div className="Logo">
            <Icons.twitterLogo />
          </div>
          <div className="list">
            {menu.map((item) => (
              <Link key={item.id} to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
            <button className="tweet">Tweet</button>
          </div>
          <div className="profile">
            <div className="user__img">
              <img src={user} alt="user png" />
            </div>
            <div className="user__info">
              <h2>Bobur</h2>
              <p>@bobur_mavlonov</p>
            </div>
          </div>
        </section>
        <section className="middle">
          <Routes>
            {routes.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </section>
        <section className="right"></section>
      </main>
    </>
  );
};
export default AppRouter;

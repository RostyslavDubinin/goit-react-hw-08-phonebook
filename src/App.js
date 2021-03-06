import { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

import { authOperations } from "./redux/auth";

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "home-view" */)
);

const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "register-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView/LogInView" /* webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "contacts-view" */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

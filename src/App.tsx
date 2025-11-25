import { Suspense } from "react";
import { type RouteObject, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import AdminRoute from "./components/admin-route";
import ProtectedRoute from "./components/protected-route";
import AuthContextProvider from "./context/auth-context";

function secureAdminRoute(route: RouteObject): RouteObject {
  if (route.children) {
    return {
      ...route,
      children: route.children.map((childRoute: RouteObject) =>
        secureAdminRoute(childRoute)
      ),
    };
  }

  return {
    ...route,
    element: <AdminRoute>{route.element}</AdminRoute>,
  };
}

function secureRoute(route: RouteObject): RouteObject {
  if (route.children) {
    return {
      ...route,
      children: route.children.map((childRoute: RouteObject) => {
        if (childRoute.path === "admin") {
          return secureAdminRoute(childRoute);
        }

        return secureRoute(childRoute);
      }),
    };
  }

  return {
    ...route,
    element: <ProtectedRoute>{route.element}</ProtectedRoute>,
  };
}

const securedRoutes = routes.map((route: RouteObject) => {
  // Example: protect all routes under /p
  if (route.path === "p") {
    return secureRoute(route);
  }

  return route;
});

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContextProvider>{useRoutes(securedRoutes)}</AuthContextProvider>
    </Suspense>
  );
}

export default App;

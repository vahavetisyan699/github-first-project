import characters from "./characters";
import Home from "./Home";
import Forms from "./Forms";

export const routes = [
  {
    path: "/",
    isExact: true,
    component: Home,
  },
  {
    path: "/characters",
    isExact: true,
    component: characters,
  },
  {
    path: "/forms",
    isExact: true,
    component: Forms,
  },
];
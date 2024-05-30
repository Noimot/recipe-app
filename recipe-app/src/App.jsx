import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import RecipeDetails from "./pages/Recipe/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Modal from "./components/Modal";
// import Recipe from "./pages/Recipe";

function App() {
  const [title, setTitle] = React.useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home title={title} setTitle={setTitle} />,
    },
    {
      path: "recipe",
      element: <Recipe title={title} setTitle={setTitle}/>,
    },
    {
      path: "recipe/:id",
      element: <RecipeDetails />,
    },
    {
      path: "recipe/add-recipe",
      element: <AddRecipe />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;

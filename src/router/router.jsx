import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Favorites } from "../pages/Favorites/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home
        inputHandler={inputHandler}
        selectHandle={selectHandle}
        newData={newData}
        likedPerson={likedPerson}
      />
    ),
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

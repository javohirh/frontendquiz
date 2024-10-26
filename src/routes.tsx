import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ErrorPage, HomePage, QuizPage } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "quiz/:title",
        element: <QuizPage />,
      },
    ],
  },
]);

export default routes;

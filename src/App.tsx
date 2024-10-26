import { useState } from "react";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </>
  );
}

export default App;

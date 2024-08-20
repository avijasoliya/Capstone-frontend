import { RouterProvider } from "react-router-dom";
import { DashboardRouter } from "./routes";

function App() {
  return <RouterProvider basename={"/"} router={DashboardRouter} />;
}

export default App;

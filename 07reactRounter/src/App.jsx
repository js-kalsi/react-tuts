import { Header, Footer } from "./components/Index";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

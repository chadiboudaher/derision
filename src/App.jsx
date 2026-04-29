import Layout from "./components/layouts/Layout";
import Welcome from "./components/layouts/Welcome";
import Dashboard from "./components/layouts/Dashboard";
import Challenge from "./components/layouts/Challenge";

function App() {
  const selectedPage = 1; // zero for welcome, 1 for dashboard, 2 for challenge
  const pages = {
    0: <Welcome />,
    1: <Dashboard />,
    2: <Challenge />,
  };
  return <Layout>{pages[selectedPage]}</Layout>;
}

export default App;

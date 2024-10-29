import Header from "./components/Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppRoutes from "./Routes.js";
import "../src/styles/global.css";
import Footer from "./components/Footer.jsx";
import { MyProvider } from "./components/Context.js";

function App() {
  return (
    <div className="App" id="home">
      <MyProvider>
      <Router>
        <Header />  
        <AppRoutes />
        <Footer />
      </Router>
      </MyProvider>
    </div>
  );
}

export default App;

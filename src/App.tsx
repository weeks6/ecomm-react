import "./styles.css";
import "./blocks/button.css";
import "./blocks/loading.css";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import UpButton from "./components/UpButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Content />
        <UpButton />
        <Footer />
      </Router>
    </div>
  );
}

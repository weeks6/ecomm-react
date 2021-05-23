import "./styles.css";
import Header from "./components/Header";
import Content from "./components/Content";

import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
}

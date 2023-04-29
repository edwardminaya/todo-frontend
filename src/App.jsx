// Components
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
// Routing
import { BrowserRouter } from "react-router-dom";
// Styling
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

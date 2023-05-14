import "./App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./Components/Pages/MovieDetail";
import Form from "./Components/Pages/Form";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieDetail/:id" element={<MovieDetail />} />
          <Route path="/MovieDetail/:id/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import MainPage from "./components/MainPage";
import DetailRecipe from "./components/DetailRecipe";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/recipeDetails/:id" element={<DetailRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;

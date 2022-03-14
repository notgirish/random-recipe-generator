import './components/Navbar/Navbar.css'
import './components/RecipePage/RecipeMainPage.css'
import './components/RecipePage/RecipeContent.css'
import './components/Todo/TodoPage.css';
import './components/Footer/Footer.css';

import Navbar from "./components/Navbar/Navbar";
import RecipeMainPage from "./components/RecipePage/RecipeMainPage";
import RecipeContent from './components/RecipePage/RecipeContent';
import TodoPage from "./components/Todo/TodoPage";
import Footer from "./components/Footer/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          {/* <Route path="/" element={<RecipeMainPage />} /> */}
          <Route path="/todo" element={<TodoPage />} />
        </Routes>

        <RecipeContent />
        {/* <TodoPage /> */}
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import RecipeMainPage from "./components/RecipeMainPage/RecipeMainPage";
import TodoPage from "./components/Todo/TodoPage";

import './components/Navbar/Navbar.css'
import './components/RecipeMainPage/RecipeMainPage.css'
import  './components/Todo/TodoPage.css';

function App() {
  return (
    <>
      <Navbar />
      <TodoPage />
      {/* <RecipeMainPage /> */}
    </>
  );
}

export default App;

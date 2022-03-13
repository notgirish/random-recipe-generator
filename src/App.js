import './components/Navbar/Navbar.css'
import './components/RecipeMainPage/RecipeMainPage.css'
import './components/Todo/TodoPage.css';
import './components/Footer/Footer.css';

import Navbar from "./components/Navbar/Navbar";
import RecipeMainPage from "./components/RecipeMainPage/RecipeMainPage";
import TodoPage from "./components/Todo/TodoPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <TodoPage />
      {/* <RecipeMainPage /> */}
      <Footer />
    </>
  );
}

export default App;

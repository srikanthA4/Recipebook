import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Auth from './pages/Auth'
import CreateRecipe from './pages/CreateRecipe'
import SavedRecipes from './pages/SavedRecipes'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
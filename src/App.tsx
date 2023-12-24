import { Route, Routes } from 'react-router-dom'
import { Home, Login, Recipes, RecipePage } from './pages'
import NavigationBar from './components/NavigationBar'


function App() {

  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/recipes" element={<Recipes/>} />
      <Route path="/recipePage/:name" element={<RecipePage/>} />
    </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './page1'
import SecondPage from './page2'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='dashboard' element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

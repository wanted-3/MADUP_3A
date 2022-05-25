import styles from './routes.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './page1'
import SecondPage from './page2'

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='dashboard' element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

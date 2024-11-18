import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import "./assets/scss/App.scss";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App

import './App.css'
import Books from './components/Books/Books'
import Faq from './components/Faq/Faq'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Books></Books>
      <Faq></Faq>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App

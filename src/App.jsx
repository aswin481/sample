import { Routes,Route } from 'react-router-dom';
import PageOne from './Pages/1stPage';
import PageTwo from './Pages/2ndPage';
import MainComponent from './Pages/MainPage';


const App=()=>{
  return(
    <div>
      <Routes > 
       <Route path='/first' element={<PageOne/>}/>
       <Route path='/second' element={<PageTwo/>}/>
       <Route path='/' element={<MainComponent/>}/>
      </Routes>
    </div>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
//import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook.jsx'
//import { FocusScreen } from './04-useRef/FocusScreen.jsx'
//import { Layout } from './05-useLayout/Layaout.jsx'
// import { Padre } from './07-tarea-memo/Padre.jsx'
//import './08-useReduce/intro-reducer.js';
// import { TodoApp } from './08-useReduce/TodoApp.jsx';
import { MainApp } from './09-useContext/MainApp.jsx';
import { BrowserRouter } from "react-router";


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </StrictMode>,
)

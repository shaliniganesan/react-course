import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Github, {githubDataLoader} from './components/Github.jsx'
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter( 
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>} />
          <Route path="about" element={<About/>}/>
          <Route path="user/" element = {<User/>} >
              <Route path=":id" element = {<User/>} />
            </Route>
          <Route loader={githubDataLoader} 
          path="/github" element = {<Github/>} />
          <Route path="*" element = {<div>Not found Error</div>} />
               
      </Route>
  ) )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

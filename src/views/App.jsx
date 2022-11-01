import './App.css'
import React from 'react'
 
import { BrowserRouter as Router } from  'react-router-dom' // essa importação mudou
 
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
 
const App = props => (
    <div className="App">
        <Router> // Usamos a importação acima bem aqui
            <Menu />
            <Content />
        </Router> // Aqui também
    </div>
)
 
export default App

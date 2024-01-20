import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children : "click me to visit chrome"
}

function MyApp(){
    return(
        <div>
            <h1>
                Custom My App
            </h1>
        </div>
    )
}

const CustomElement = (
    <a href="https://google.com">Click here to see google</a>
)


const areactElement = React.createElement(
     'a',
     {href:"https://google.com", target:"_blank"},
     "click me to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
 
)

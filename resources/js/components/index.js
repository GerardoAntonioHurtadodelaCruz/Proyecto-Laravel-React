import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import Example from './Example'

ReactDOM.render (
       (
         <Router>
           <Example/>
         </Router>
      ), document.getElementById('example'));


    
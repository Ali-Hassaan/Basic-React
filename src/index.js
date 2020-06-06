import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return <div>
            Hello <strong>CNC</strong>
            <div>
          <h1><i>Cities Name:</i></h1>
          <ol>
            <li>Karachi</li>
            <li>Lahore</li>
            <li>Islamabad</li>
          </ol>
          value of x = {152 + 48}
        </div>  

  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));

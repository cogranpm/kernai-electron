import React from 'react';
import ReactDOM from 'react-dom';
import { HelloComponent } from './dist/typescript';

ReactDOM.render(
    <div>Hello World
        <HelloComponent/>
    </div>,
   document.querySelector('#typescript_container')
)




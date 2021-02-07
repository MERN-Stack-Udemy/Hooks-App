import React from 'react';
import ReactDOM from 'react-dom';

import './global.css'

// import { FormWithCustomHook } from './Components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './Components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './Components/04-useRef/FocusScreen';
// import { Counter } from '. /Components/01-useState/Counter';
// import { CounterWithCustomHook } from './Components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './Components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import reportWebVitals from './reportWebVitals';
// import { RealExampleRef } from './Components/04-useRef/RealExampleRef';
import { LayoutEffect } from './Components/05-useLayoutEffect/LayoutEffect';

ReactDOM.render(
    <LayoutEffect />, 
  document.getElementById('root')
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

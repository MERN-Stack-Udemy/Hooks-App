import React from 'react';
import ReactDOM from 'react-dom';

// import { FormWithCustomHook } from './Components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './Components/03-examples/MultipleCustomHooks';
import './global.css'

// import { Counter } from '. /Components/01-useState/Counter';
// import { CounterWithCustomHook } from './Components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './Components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <MultipleCustomHooks />, 
  document.getElementById('root')
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { React } from "react";
import { 
    Route, 
    Switch,
    BrowserRouter as Router 
} from "react-router-dom";

// import { FormWithCustomHook } from './Components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './Components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './Components/04-useRef/FocusScreen';
import { Counter } from './Components/01-useState/Counter';
// import { CounterWithCustomHook } from './Components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './Components/02-useEffect/SimpleForm';
import { HookApp } from './HookApp';
// import { RealExampleRef } from './Components/04-useRef/RealExampleRef';
// import { LayoutEffect } from './Components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './Components/06-memos/Memorize';
import { MemoHook } from './Components/06-memos/MemoHook';
// import { CallbackHook } from './Components/06-memos/CallbackHook';
// import { Padre } from './Components/07-tarea-memo/Padre';
// import './Components/08-useReducer/intro-reducer'
import { TodoApp } from './Components/08-useReducer/TodoApp';
import { MainApp } from './Components/09-useContext/MainApp';

export default function Rutas(){
    return(
        <Router>
            <Switch>
                <Route exact path="/memo"> <MemoHook/> </Route>
                <Route exact path="/app-todo"> <TodoApp/> </Route>
                <Route exact path="/app-main"> <MainApp/> </Route>
                <Route exact path="/app-hook"> <HookApp/> </Route>
                <Route exact path="/app-couter"> <Counter/> </Route>

                <Route path="/"> <TodoApp/> </Route>
            </Switch>
        </Router>
    )
}

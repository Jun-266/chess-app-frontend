import './App.css';
import React from 'react';
import Board from './components/Board/Board.jsx';
import { reducer } from './reducer/reducer'
import { useReducer } from 'react'
import { initGameState } from './constants';
import AppContext from './contexts/Context'
import Control from './components/Control/Control.jsx';
import TakeBack from './components/Control/bits/TakeBack.jsx';
import MovesList from './components/Control/bits/MovesList.jsx';

function App() {

    const [appState, dispatch ] = useReducer(reducer,initGameState);

    const providerState = {
        appState,
        dispatch
    }

    return (
        <AppContext.Provider value={providerState} >
            <div className="App">
                <Board/>
                <Control>
                    <MovesList/>
                    <TakeBack/>
                </Control>
            </div>
        </AppContext.Provider>
    );
}

export default App;

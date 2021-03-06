import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [inventoryPlayerOne, setInventoryPlayerOne] = useState([]);
    const [inventoryPlayerTwo, setInventoryPlayerTwo] = useState([]);
    const [chooseBoxPlayerOne, setChooseBoxPlayerOne] = useState([]);
    const [chooseBoxPlayerTwo, setChooseBoxPlayerTwo] = useState([]);
    const [pokeList, setPokeList] = useState('');

    const [gameStatus, setGameStatus] = useState(false);
    
    return (
        <AppContext.Provider value={[
            inventoryPlayerOne,
            setInventoryPlayerOne,
            inventoryPlayerTwo,
            setInventoryPlayerTwo,
            gameStatus,
            setGameStatus,
            pokeList, 
            setPokeList,
            chooseBoxPlayerOne, 
            setChooseBoxPlayerOne,
            chooseBoxPlayerTwo, 
            setChooseBoxPlayerTwo
        ]}>
            {children}
        </AppContext.Provider>
    );
}
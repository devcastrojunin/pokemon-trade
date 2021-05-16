import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appContext";
import Content from "./Content";

const ChooseBox = () => {
    const [
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
    ] = useContext(AppContext);

    
    const [xpPokePlayerOne, setXpPokePlayerOne] = useState(0);
    const [xpPokePlayerTwo, setXpPokePlayerTwo] = useState(0);
    const [restartAreaStatus, setRestartAreaStatus] = useState(false);
    
    const setChooseBoxPlayerTwoList = () => {
        let randPokemonList = [];
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        for (let index = 0; index < randomNumber; index++) {
            let randPokemon = inventoryPlayerTwo[Math.floor(Math.random() * inventoryPlayerTwo.length)];
            randPokemonList.push(randPokemon);
        }
        setChooseBoxPlayerTwo(randPokemonList);
    }    

    const tradeCards = () => {
        let xpDiference = xpPokePlayerOne - xpPokePlayerTwo;

        if (xpDiference > 10) {
            let confirm = window.confirm('A troca não possui uma pontuação justa, deseja realizá-la?');
            if (confirm) 
                handleCards();

            return false;
        }else if (xpDiference < -10) {
            alert('O jogador 2 recusou a troca, pois não achou a pontuação justa');
            return false;
        }else{
            handleCards();
        }

    }

    const handleCards = () => {
        let cardsIdPlayerOne = chooseBoxPlayerOne.map(({id}) => id);
        let updateInventoryPlayerOne = inventoryPlayerOne.filter(item => !cardsIdPlayerOne.includes(item.id));
        let currentList = [...chooseBoxPlayerTwo, ...updateInventoryPlayerOne];
        
        setInventoryPlayerOne(currentList);
        setChooseBoxPlayerOne([]);
        setChooseBoxPlayerTwo([]);
        alert('Troca realizada com sucesso! \nConfira no seu invetário.')
        document.getElementById('inventoryList').click();
        setRestartAreaStatus(true);
    }

    const restartTrade = () => {
        window.location.reload();
    }

    useEffect(() => {
        setChooseBoxPlayerTwoList();
    }, [inventoryPlayerTwo])

    useEffect(() => {
        if(chooseBoxPlayerOne[0]){
            let totalXpPlayerOne = chooseBoxPlayerOne.reduce((acc, curr) => acc + curr.base_experience, 0);            
            setXpPokePlayerOne(totalXpPlayerOne);
        }
    }, [chooseBoxPlayerOne])

    useEffect(() => {
        if(chooseBoxPlayerTwo[0]){
            let totalXpPlayerTwo = chooseBoxPlayerTwo.reduce((acc, curr) => acc + curr.base_experience, 0);
            setXpPokePlayerTwo(totalXpPlayerTwo); 
        }
    }, [chooseBoxPlayerTwo])

    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-4 mt-5 text-center">
                    <h3>Área de troca</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 position-relative">
                    {restartAreaStatus &&
                        <div className="restart-area d-flex justify-content-center align-items-center position-absolute top-0 start-0">
                            <div className="d-flex justify-content-center align-items-center">
                                <button onClick={restartTrade} className="btn btn-primary"><i class="fa fa-refresh" aria-hidden="true"></i> Reiniciar</button>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="col-md-5">
                            <div className="col-md-12 d-flex justify-content-start align-items-center mb-2">
                                <div>
                                    Total de XP de todas as cartas: <span className="badge bg-success">{xpPokePlayerOne}</span>
                                </div>
                            </div>
                            <Content title="Jogador 1" slug="jogador-1" />
                        </div>
                        <div className="col-md-2 action-area text-center">
                            <span>
                                <i className="fa fa-retweet" aria-hidden="true"></i>
                                <button 
                                    type="button" 
                                    className="btn btn-success" 
                                    disabled={chooseBoxPlayerOne.length == 0}
                                    onClick={tradeCards}
                                >
                                    Trocar
                                </button>
                            </span>
                        </div>
                        <div className="col-md-5">
                            <div className="col-md-12 d-flex justify-content-start align-items-center mb-2">
                                <div>
                                    Total de XP de todas as cartas: <span className="badge bg-success">{xpPokePlayerTwo}</span>
                                </div>
                            </div>  
                            <Content title="Jogador 2" slug="jogador-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseBox;
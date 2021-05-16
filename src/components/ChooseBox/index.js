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

    const setChooseBoxPlayerTwoList = () => {
        let randPokemonList = [];
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        for (let index = 0; index < randomNumber; index++) {
            let randPokemon = inventoryPlayerTwo[Math.floor(Math.random() * inventoryPlayerTwo.length)];
            randPokemonList.push(randPokemon);
        }
        setChooseBoxPlayerTwo(randPokemonList);
    }

    const getTotalXp = () => {
        let totalXpPlayerOne = chooseBoxPlayerOne.reduce((acc, curr) => acc + curr.base_experience, 0);
        let totalXpPlayerTwo = chooseBoxPlayerTwo.reduce((acc, curr) => acc + curr.base_experience, 0);

        setXpPokePlayerOne(totalXpPlayerOne);
        setXpPokePlayerTwo(totalXpPlayerTwo);
    }

    useEffect(() => {
        setChooseBoxPlayerTwoList();
    }, [inventoryPlayerTwo])

    useEffect(() => {
        if(chooseBoxPlayerOne[0] !== undefined)
            getTotalXp();
    }, [chooseBoxPlayerOne])

    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-4 mt-5 text-center">
                    <h3>Área de troca</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="col-md-12 d-flex justify-content-start align-items-center mb-2">
                                <div>
                                    Soma total: <span class="badge bg-success">{xpPokePlayerOne}</span>
                                </div>
                            </div>
                            <Content title="Jogador 1" slug="jogador-1" inventory={inventoryPlayerOne} />
                        </div>
                        <div className="col-md-2 action-area text-center">
                            <span>
                                <i className="fa fa-retweet" aria-hidden="true"></i>
                                <button type="button" className="btn btn-success" disabled={chooseBoxPlayerOne.length == 0}>Trocar</button>
                            </span>
                        </div>
                        <div className="col-md-5">
                            <div className="col-md-12 d-flex justify-content-start align-items-center mb-2">
                                <div>
                                    Soma total: <span class="badge bg-success">{xpPokePlayerTwo}</span>
                                </div>
                            </div>
                            <Content title="Jogador 2" slug="jogador-2" inventory={inventoryPlayerTwo} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseBox;
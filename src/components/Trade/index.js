import { useContext, useEffect, useState } from "react";
import { AppContext, AppProvider } from "../../context/appContext";
import { api } from "../../services/api";
import ChooseBox from "../ChooseBox";
import Initial from "../Initial";
import Inventory from "../Inventory";
import Main from "../Main";
import Modal from "../Modal";
import Tips from "../Tips";

const Trade = () => {
    const [
        inventoryPlayerOne,
        setInventoryPlayerOne,
        inventoryPlayerTwo,
        setInventoryPlayerTwo,
        gameStatus,
        setGameStatus,
        pokeList,
        setPokeList
    ] = useContext(AppContext);

    const fechPokemons = () => {
        let randPokemonList = [];
        for (let index = 0; index < 300; index++) {
            let pokeId = Math.floor(Math.random() * 301) + 1;
            api
                .get(`${pokeId}`)
                .then(res => {
                    randPokemonList.push(res.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
        setPokeList(randPokemonList);

    }

    useEffect(() => {
        fechPokemons();
    }, []);

    return (

        <Main>
            {!gameStatus &&
                <Initial />
            }
            {gameStatus &&
                <div className="container">
                    <Tips />
                    <div className="row">
                        <div className="col-md-12">
                            <ChooseBox />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Inventory />
                        </div>
                    </div>
                </div>
            }            
        </Main>

    )
}

export default Trade;
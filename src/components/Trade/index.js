import { useContext, useEffect, useState } from "react";
import { AppContext, AppProvider } from "../../context/appContext";
import { api } from "../../services/api";
import ChooseBox from "../ChooseBox";
import Initial from "../Initial";
import Inventory from "../Inventory";
import Main from "../Main";
import ModalInfo from "../ModalInfo";
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
        setPokeList,
        chooseBoxPlayerOne, 
        setChooseBoxPlayerOne,
        chooseBoxPlayerTwo, 
        setChooseBoxPlayerTwo
    ] = useContext(AppContext);
    const [info, setInfo] = useState(true);

    const fechPokemons = () => {
        let randPokemonList = [];
        for (let index = 0; index < 300; index++) {
            let pokeId = Math.floor(Math.random() * 301) + 1;
            api
                .get(`${pokeId}`)
                .then(res => {
                    randPokemonList.push(res.data);
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
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-end align-items-center mt-5">
                            <button type="button" className="btn btn-info d-flex justify-content-center align-items-center" id="openModalInfo" data-bs-toggle="modal" data-bs-target="#modalInfo">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;Dicas e informações
                            </button>     
                        </div>
                    </div>            
                    <ModalInfo>
                        <Tips />
                    </ModalInfo>
                    <Inventory />
                    <ChooseBox />
                </div>
            }            
        </Main>

    )
}

export default Trade;
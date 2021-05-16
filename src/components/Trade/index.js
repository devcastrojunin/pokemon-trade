import { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
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
                        <div className="col-md-12 d-flex justify-content-between align-items-center mt-4">
                            <a id="inventoryList" className="btn btn-primary" href="#inventory"><i className="fa fa-eye" aria-hidden="true"></i> Ver minhas cartas</a>
                            <button type="button" className="btn btn-info d-flex justify-content-center align-items-center" id="openModalInfo" data-bs-toggle="modal" data-bs-target="#modalInfo">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;Dicas e informações
                            </button>
                        </div>
                    </div>
                    <ModalInfo>
                        <Tips />
                    </ModalInfo>
                    <ChooseBox />
                    <Inventory/>
                </div>
            }
        </Main>

    )
}

export default Trade;
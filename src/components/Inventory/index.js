import { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import Content from "./Content"

const Inventory = () => {
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

    const randomPokemonPlayerOneCreate = () => {
        let randPokemonList = [];

        for (let index = 0; index < 20; index++) {
            let randPokemon = pokeList[Math.floor(Math.random() * pokeList.length)];
            randPokemonList.push(randPokemon);
        }
        setInventoryPlayerOne(randPokemonList);
    }

    const randomPokemonPlayerTwoCreate = () => {
        let randPokemonList = [];

        for (let index = 0; index < 20; index++) {
            let randPokemon = pokeList[Math.floor(Math.random() * pokeList.length)];
            randPokemonList.push(randPokemon);
        }
        setInventoryPlayerTwo(randPokemonList);

    }
    
    useEffect(() => {
        randomPokemonPlayerOneCreate();
        randomPokemonPlayerTwoCreate();

        document.getElementById('openModalInfo').click();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-4 mt-5 text-center" id="inventory">
                    <h3 className="mt-4">Inventário</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box-card">
                                <div className="row">
                                    <Content title="Jogador 1" inventory={inventoryPlayerOne} />
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default Inventory;
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
        setPokeList
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
    }, [])

    return (
        <>
            <div className="row">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-6">
                    <div className="box-card">
                        <div className="row">
                            <Content  title="Jogador 1" inventory={inventoryPlayerOne}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box-card">
                        <div className="row">
                            <Content  title="Jogador 2" inventory={inventoryPlayerTwo}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inventory;
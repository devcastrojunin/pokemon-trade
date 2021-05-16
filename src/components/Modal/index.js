import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/appContext";

const Div = styled.div`
    .modal-body{
        .list-group{
            li, li > div{
                width: 100%;
            }
        }
    }
`;

const Modal = ({data}) => {
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

    const [chooseBoxPlayerOneSelection, setChooseBoxPlayerOneSelection] = useState([])

    const addCard = pokemon => {
        if ((chooseBoxPlayerOneSelection.length + 1) <= 6) {
            let setInventoryPlayerOneUpdate = inventoryPlayerOne.filter( item => item.id !== pokemon.id);
            setInventoryPlayerOne(setInventoryPlayerOneUpdate);
            setChooseBoxPlayerOneSelection([...chooseBoxPlayerOneSelection, pokemon])                
        }else{
            alert('Vc atingiu o número máximo de cartas para troca.')
        }
    }
    
    useEffect(() => {
        setChooseBoxPlayerOne(chooseBoxPlayerOneSelection);
    }, [chooseBoxPlayerOneSelection])

    return (
        <Div>
            <div className="modal fade" id="modalPokeList" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Inventário</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                {data.map((pokemmon, index) => {
                                    return (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <figure>
                                                        <img src={pokemmon.sprites.front_default} alt={pokemmon.name} />
                                                    </figure>
                                                    <div className="pokeInfos">
                                                        <div className="pokeName">
                                                            <h4>
                                                                {pokemmon.name}
                                                            </h4>
                                                        </div>
                                                        <p>
                                                            <strong>Altura: </strong>{pokemmon.height} | <strong>Peso: </strong>{pokemmon.weight} | <strong>Xp: </strong>{pokemmon.base_experience}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-secondary btn-sm" onClick={e => addCard(data[index])}>
                                                    ADICIONAR CARTA <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button id="closeModal" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    );
}

export default Modal;
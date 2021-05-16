import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { AppContext } from '../../../context/appContext';
import Modal from '../../Modal';

const Div = styled.div`
    .box-card{
        position: relative;
        padding: 1rem 1rem 0;
        border: 1px solid #dee2e6;
        margin-bottom: 50px;
        min-height: 615px;

        .disabled-area{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 30;
        }
    }
    .card__item{
        position: relative;

        .card{
            min-height: 250px;
            transition: all 0.25s ease-in-out 0s;
            position: relative;
            border-radius: 5px;

            .remove-card{
                position: absolute;
                right: -7px;
                top: -12px;
                color: #cc0303;
                cursor: pointer;
            }

            .card__content{
                height: 100%;
                width: 100%;
                background-color: #fff;
            }
            figure{
                width: 100%;
                height: 100px;
                margin: 0;
            }
        }
    }
`;

const Content = ({ title, slug}) => {
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

    const removeCard = pokemon => {
        let chooseBoxPlayerOneUpdate = chooseBoxPlayerOne.filter(item => item.id !== pokemon.id);
        setChooseBoxPlayerOne(chooseBoxPlayerOneUpdate);
        setInventoryPlayerOne([...inventoryPlayerOne, pokemon]);
    }


    return (
        <Div>
            <div className="box-card">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <h4 className="d-flex justify-content-between align-items-center">
                            <span>{(slug === 'jogador-1') ? title : `Cartas oferecidas pelo ${title}`}</span>
                            {slug !== 'jogador-2' &&
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalPokeList"
                                    disabled={
                                        chooseBoxPlayerOne.length == 6
                                    }
                                >
                                    SELECIONAR CARTAS PARA TROCA <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            }
                        </h4>
                        <hr />
                    </div>
                    {slug === 'jogador-1' &&
                        chooseBoxPlayerOne.map((pokemon, index) => {
                            return (
                                <div key={index} className="col-4 mb-4 card__item">
                                    <div className="card">
                                        <span className="remove-card" onClick={e => removeCard(chooseBoxPlayerOne[index])}>
                                            <i className="fa fa-times-circle" aria-hidden="true"></i>
                                        </span>
                                        <div className="card__content">
                                            <figure className="d-flex justify-content-center align-items-center">
                                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                            </figure>
                                            <div className="card-body">
                                                <div className="pokeName">
                                                    <h5 className="card-title text-center">{pokemon.name}</h5>
                                                </div>
                                                <hr />
                                                <p>
                                                    <strong>Altura: </strong>{pokemon.height} <br />
                                                    <strong>Peso: </strong>{pokemon.weight} <br />
                                                    <strong>Xp: </strong>{pokemon.base_experience}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {(slug === 'jogador-2' && chooseBoxPlayerTwo[0] !== undefined) &&
                        <>
                            {
                                chooseBoxPlayerTwo.map((pokemon, index) => {
                                    return (
                                        <div key={index} className="col-4 mb-4 card__item">
                                            <div className="card">
                                                <div className="card__content">
                                                    <figure className="d-flex justify-content-center align-items-center">
                                                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                                    </figure>
                                                    <div className="card-body">
                                                        <div className="pokeName">
                                                            <h5 className="card-title text-center">{pokemon.name}</h5>
                                                        </div>
                                                        <hr />
                                                        <p>
                                                            <strong>Altura: </strong>{pokemon.height} <br />
                                                            <strong>Peso: </strong>{pokemon.weight} <br />
                                                            <strong>Xp: </strong>{pokemon.base_experience}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                </div>
            </div>
            <Modal data={inventoryPlayerOne} />
        </Div>
    )
}

export default Content;

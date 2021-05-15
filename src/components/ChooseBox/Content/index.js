import React, { useContext } from 'react'
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
            cursor: pointer;
            min-height: 250px;
            transition: all 0.25s ease-in-out 0s;
            &:hover{
                border-color: rgba(0,0,0, 0.5);
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

const Content = ({ title, slug, inventory }) => {
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
        choosePlayerTwo,
        setChoosePlayerTwo
    ] = useContext(AppContext);

    return (
        <Div>
            <div className="box-card">
                {slug == 'jogador-2' &&
                    <div className="disabled-area"></div>
                }
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <h4 className="d-flex justify-content-between align-items-center">
                            <span>{title} </span>
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
                                    SELECIONAR CARTA <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            }
                        </h4>
                        <hr />
                    </div>
                    {chooseBoxPlayerOne.map((pokemon, index) => {
                        return (
                            <div key={index} className="col-4 mb-4 card__item">
                                <div className="card">
                                    <div className="card__content">
                                        <figure className="d-flex justify-content-center align-items-center">
                                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                        </figure>
                                        <div className="card-body">
                                            <div className="pokeName">
                                                <h4 className="card-title text-center">{pokemon.name}</h4>
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
                </div>
            </div>

            <Modal data={inventory} />
        </Div>
    )
}

export default Content;

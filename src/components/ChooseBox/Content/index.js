import React from 'react'
import styled from 'styled-components';
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


    return (
        <Div>
            <div className="box-card">
                {slug == 'jogador-2' &&
                    <div className="disabled-area"></div>
                }
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <h4 className="d-flex justify-content-between align-items-center">
                            <span>Área de troca {title} </span>
                            {slug !== 'jogador-2' &&
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    ADICIONAR CARTA <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            }
                        </h4>
                        <hr />
                    </div>
                    <div className="col-4 mb-4 card__item">
                        <div className="card">
                            <div className="card__content">
                                <figure className="d-flex justify-content-center align-items-center">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png" alt="" />
                                </figure>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Charmander</h5>
                                    <p>
                                        <strong>Altura: </strong>6 <br />
                                        <strong>Peso: </strong>120 <br />
                                        <strong>Xp: </strong>60
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal data={inventory} />
        </Div>
    )
}

export default Content;

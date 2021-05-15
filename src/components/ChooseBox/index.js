import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import Content from "./Content";

const ChooseBox = () => {
    const [
        inventoryPlayerOne,
        setInventoryPlayerOne,
        inventoryPlayerTwo,
        setInventoryPlayerTwo,
        gameStatus,
        setGameStatus
    ] = useContext(AppContext);

    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <Content title="Jogador 1" slug="jogador-1" inventory={inventoryPlayerOne}/>                    
                </div>
                <div className="col-md-2 action-area text-center">
                    <span>
                        <i className="fa fa-retweet" aria-hidden="true"></i>
                        <button type="button" className="btn btn-success">Trocar</button>
                    </span>
                </div>
                <div className="col-md-5">
                    <Content title="Jogador 2" slug="jogador-2" inventory={inventoryPlayerTwo}/>
                </div>
            </div>
        </>
    )
}

export default ChooseBox;
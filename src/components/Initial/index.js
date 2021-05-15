import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppContext } from '../../context/appContext';

const blink = keyframes`
  0% { color: transparent; }
  100% { color: radboats; }
`;

const shake = keyframes`
    0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
`;

const fall = keyframes`
    0% { top: -200px }
    60% { top: 0 }
    80% { top: -20px }
    100% { top: 0 }
`;


export const Container = styled.div`
  *, *:before, *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    body {
        background: #ecf0f1;
    }
    .center-on-page {
        h4{
            margin: 50px;
            font-weight: bold;
            font-size: 30px;    
        }
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .pokeball {
        position: relative;
        width: 200px;
        height: 200px;
        background: #fff;
        border: 10px solid #000;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset -10px 10px 0 10px #ccc;
        animation: ${fall} .25s ease-in-out, ${shake} 1.25s cubic-bezier(.36,.07,.19,.97) infinite;
    }
    .pokeball::before,
    .pokeball::after {
    content:"";
        position: absolute;
    }
    .pokeball::before {
        background: red;
        width: 100%;
        height: 50%;
    }
    .pokeball::after {
        top: calc(50% - 10px);
        width: 100%;
        height: 20px;
        background: #000;
    }
    .pokeball__button {
        position: absolute;
        top: calc(50% - 30px);
        left: calc(50% - 30px);
        width: 60px;
        height: 60px;
        background: #7f8c8d;
        border: 10px solid #fff;
        border-radius: 50%;
        z-index: 10;
        box-shadow: 0 0 0 10px black;
        animation: ${blink} .5s alternate 7;
    }
`;


const Initial = ({children}) => {
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

    const handlerBall = () => {
        setGameStatus(true)
    }

    return (
        <Container>
            <div className="center-on-page">
                <h4>Clique na pokebola para iniciar</h4>
                <div className="pokeball" onClick={handlerBall}>
                    <div className="pokeball__button"></div>
                </div>
            </div>
        </Container>
    );
}

export default Initial;
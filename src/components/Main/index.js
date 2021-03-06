import styled from "styled-components";

const Main = styled.main`
    background-color: #fefefe;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    .action-area{
        span{
            display: flex;
            flex-direction: column;
            margin-top: 300px;
            align-items: center;

            button{
                width: 100px;
                margin-top: 10px;
            }

            i{
                font-size: 40px;    
            }
        }
    }
    .list{
        height: 1250px;
        overflow-y: auto;

        figure{
            margin: 0;
            border-radius: 5px;
        }
    }
    .pokeName{
        h5::first-letter{
            text-transform: uppercase;
        }
    }
    .restart-area{
        width: 100%;
        height: 100%;
        background-color: rgba(250, 250, 250, 0.9);
        z-index: 999;
    }
`;

export default Main;
import styled from "styled-components";

const Main = styled.main`
    background-color: #fefefe;
    box-sizing: border-box;

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
        height: 500px;
        overflow-y: auto;

        ul{
            li{
                figure{
                    margin: 0;
                    border: 1px solid #000;
                    border-radius: 100%;
                    margin-right: 10px;
                }
            }
        }
    }
    .pokeName{
        h4::first-letter{
            text-transform: uppercase;
        }
    }
`;

export default Main;
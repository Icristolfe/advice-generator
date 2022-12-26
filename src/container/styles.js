import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: hsl(218, 23%, 16%);

    .c-loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

@media (max-width: 869px) {
    button {
      position: absolute;
      top: 420px;
    }
}





`

export const AdviceContainer = styled.div`
    width: 375px;
    height: 550px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 30px;
    border-radius: 10px;
    color: hsl(193, 38%, 86%);
    background: hsl(217, 19%, 24%);
    padding-top: 25px;


    button {
      width: 70px;
      height: 70px;
      background: hsl(150, 100%, 66%);
      border-radius: 50%;
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;    
      position: absolute;
      top: 85%;
    }     
    

    button:hover {
      opacity: 0.7
    }

    button:active {
      opacity: 0.5
    }


    p{
      color: hsl(150, 100%, 55%);
      font-size: 28px;
      letter-spacing: 3px;
      font-weight: 800;
      font-size: 16px;
      margin-bottom: 40px;
    }

    h1 {
        text-align: center;
        font-family: 'Manrope';
    }


    
`

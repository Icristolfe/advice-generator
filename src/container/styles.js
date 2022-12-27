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
  border: 6px solid hsl(217, 19%, 24%);
  border-radius: 50%;
  border-top-color: #00BFFF;
  height: 50px;
  width: 50px;
}
button {
      width: 70px;
      height: 70px;
      background: #00BFFF;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;    
    }     

    button:hover {
      opacity: 0.7
    }

    button:active {
      opacity: 0.5
    }


@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}


`

export const AdviceContainer = styled.div`
    width: 375px;
    height: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 30px;
    border-radius: 10px;
    color: hsl(193, 38%, 86%);
    background: hsl(217, 19%, 24%);
    padding-top: 25px;
    margin-bottom: 30px;


    p{
      color: #00BFFF;
      font-size: 28px;
      letter-spacing: 3px;
      font-weight: 800;
      font-size: 16px;
      margin-bottom: 40px;
    }

    h2 {
        text-align: center;
        font-family: 'Manrope';
        font-size: 20px;
    }


    
`

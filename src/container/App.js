//font-family: 'Sevillana', cursive;
import React, {useState, useEffect} from "react";
import { api } from "../services/api";
import { Container, AdviceContainer } from './styles'
import Divider from '../assets/divider.svg'

import ButtonIcon from '../assets/icon.svg'

function App() {
  const [ advice, setAdvice] = useState()

  
 
  useEffect(() => {
    async function getAdvice(){
    const { data } = await api.get('')
    setAdvice(data.slip)
  }
  getAdvice() 
   
  },[])

  async function newAdvice() {
    const { data } = await api.get('')
    setAdvice(data.slip)
  }

  
  return (
    <Container>
     {
      advice ? (
        
          <AdviceContainer className="containerItems" key={advice.id} >
            <p>ADVICE #{advice.id}</p>
      
            <div className="containerItems" >
            <h1>“{advice.advice}”</h1>
            </div>
            <img className="divider" src={Divider} alt="divider" />
            <button onClick={newAdvice}><img src={ButtonIcon} alt="button" /></button>
          </AdviceContainer>
          
      
      ) : (
        <div className="c-loader"></div>
        )
     }
      
    </Container>
  );
}

export default App;

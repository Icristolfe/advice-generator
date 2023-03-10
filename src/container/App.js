//font-family: 'Sevillana', cursive;
import React, {useState, useEffect} from "react";
import { api } from "../services/api";
import { Container, AdviceContainer } from './styles'

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
        
          <AdviceContainer key={advice.id} >
            <p>ADVICE #{advice.id}</p>
            
            <h2>“{advice.advice}”</h2>
            
          </AdviceContainer>
          
      
      ) : (
        <div className="c-loader"></div>
        )
     }
      <button onClick={newAdvice}><img src={ButtonIcon} alt="button" /></button>
    </Container>
  );
}

export default App;

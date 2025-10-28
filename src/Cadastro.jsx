import { useState } from 'react'
import './App.css'
import apple from './assets/Apple-Logo.png'
import facebook from './assets/Facebook-Logo.png'
import google from './assets/Google-Emblema.png'

function Cadastro() {

  return (
    <>
      <div>
      <h1>Login</h1>
     
      
    
      <input type="text" placeholder='Usuário' />

      <input type="text" placeholder='Senha' />

      <h4>
        <input type="checkbox" name="" id="" />
        Mantenha me conectado
      </h4>   

      <button class='app-button'> ENTRAR </button>
      
      <h2>Logar Com</h2>
      <img src={apple } alt="" id="apple"/>
      <img src={facebook} alt="" id="facebook" />
      <img src={google} alt="" id="google" />
      
      <a href="http://"> 
      <h3>Esqueceu a senha?</h3>
      </a>
  
      <a href="http://"> 
      <h5> Não tem uma conta? Inscrever-se</h5>
      </a>
       </div> 
       
      
    </>
  )
}

export default Cadastro

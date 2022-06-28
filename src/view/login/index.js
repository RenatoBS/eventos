import React, { useState } from 'react';
import './login.css'

import firebase from '../../config/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [msgTipo, setMsgTipo] = useState()
    function logar() {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, senha)
            .then((resultado) => {
                setMsgTipo('sucesso')
            }
            ).catch((error) => {
                setMsgTipo('erro')

            })
    }

    return (
        <div className='login-content d-flex align-items-center'>
            <form className="form-signin mx-auto">
                <div className='text-center mb-4'>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />
                <button className="btn btn-lg btn-block btn-login my-2" type="button" onClick={logar}>Logar</button>
                <div className='msg-login text-white text-center my-5'>
                    {
                        msgTipo === 'sucesso' && <span><strong>WOW! </strong>Voce esta conectado! &#128526;</span>
                    }
                    {
                        msgTipo === 'error' && <span><strong>Ops! </strong>Verifique se a senha ou usuario estao corretos! &#128546;</span>
                    }
                </div>
                <div className='opcoes-login mt-5 text-center'>
                    <a href='#' className='mx-2'>Recuperar senha</a>
                    <span className='text-white'>&#9733;</span>
                    <a href='#' className='mx-2'>Quero Cadastrar</a>
                </div>
            </form >
        </div >
    )
}

export default Login
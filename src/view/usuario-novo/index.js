import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import '../../config/firebase'
import './usuario-novo.css'

function NovoUsuario() {


    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [msgTipo, setMsgTipo] = useState()
    const [msg, setMsg] = useState()
    const [carregando, setCarregando] = useState()

    function cadastrar() {
        setCarregando(1)

        setMsgTipo(null)
        if (!email || !senha) {
            setCarregando(0)
            setMsgTipo('erro')
            setMsg('Voce precisa informar o email e senha para fazer o cadastro!')
            return;
        }
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, senha)
            .then(resultado => {
                setCarregando(0)
                setMsgTipo('sucesso')
            })
            .catch(erro => {
                setCarregando(0)
                setMsgTipo('erro')
                console.log(erro.code)
                switch (erro.code) {
                    case 'auth/invalid-email':
                        setMsg('Email invalido')
                        break;
                    case 'auth/weak-password':
                        setMsg('Senha deve conter 6 caracters')
                        break;
                    case 'auth/email-already-in-use':
                        setMsg('Email ja utilizado por outro usuario')
                        break;
                    default:
                        setMsg(erro.code)
                        break;
                }
            })

    }

    return (
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastro</h1>
                <input onChange={(e) => setEmail(e.target.value)} className='form-control my-2' type='email' placeholder='Email'></input>
                <input onChange={(e) => setSenha(e.target.value)} className='form-control my-2' type='password' placeholder='Senha'></input>
                {
                    carregando ? <div class="spinner-border text-danger" role="status"></div> : <div></div>
                }
                <button onClick={cadastrar} type="button" className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>
                <div className='msg-login text-black text-center my-5'>
                    {
                        msgTipo === 'sucesso' && <span><strong>WOW! </strong>Usuario cadastrado com sucesso! &#128526;</span>
                    }
                    {
                        msgTipo === 'erro' && <span><strong>Ops! </strong>{msg} &#128546;</span>
                    }
                </div>
            </form>
        </div>
    )
}

export default NovoUsuario
import { FormEvent, useState } from "react";
import { Input } from "../../components/input";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IdentificationBadge } from "@phosphor-icons/react";
import "../login/style.css";

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (email === '' || password === '') {
            alert('Preencha o email ou password')
            return
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('Logado com sucesso');
            navigate('/', { replace: true})
        })
        .catch((error) => {
            console.log('Não foi possível realizar o login');
            console.log(error);
        })
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <div className="center">
                    <IdentificationBadge size={120} weight="fill" className="user"/>
                </div>
            
                <Input 
                    placeholder="seuemail@email.com.br"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />

                <Input
                    placeholder="**********"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                />

                <div className="center">
                    <button type="submit" className="botao">Entrar</button>
                </div>
            </form>
        </div>
    )
}
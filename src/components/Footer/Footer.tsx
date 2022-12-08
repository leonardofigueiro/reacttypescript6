import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import { useSorteador } from "../../state/hooks/useSorteador"



const Rodape = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        & img {
            margin-top: 32px;
        }
        }
`

const Imagem = styled.img``

const Botao = styled.button`
    background-color: #FE652B;
    border-radius: 45px;
    box-shadow: 2px 2px 0px 1px #000000;
    color: #FFF;
    cursor: pointer;
    font-size: 20px;
    height: 80px;
    width: 350px;
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
                    }
        &:hover {
            background-color: #4B69FD;
        }
        @media screen and (max-width: 800px) {
            width: 220px;
            margin: 32px 0;
        }
`


export default function Footer() {
    const participantes = useListaDeParticipantes()
    const navegarPara = useNavigate()
    const sortear = useSorteador()
    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }
    return (
        <Rodape>
            <Botao disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</Botao>
            <Imagem src="imagens/sacolas.png" />
        </Rodape>
    )
}
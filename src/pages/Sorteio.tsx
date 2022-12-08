import { useState } from "react"
import Card from "../components/Card/card"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"
import BotaoSortear from "./Sorteio/BotaoSortear"
import FooterSorteio from "./Sorteio/FooterSorteio"
import ParResultado from "./Sorteio/ParResultado"
import SectionSorteio from "./Sorteio/SectionSorteio"
import Select from "./Sorteio/Select"


const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }
    return (

        <Card>
            <SectionSorteio>
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <Select
                        required
                        name="participantedavez"
                        id="participantedavez"
                        placeholder="Selecione o seu nome"
                        value={participanteDaVez}
                        onChange={evento => setParticipanteDaVez(evento.target.value)}
                    >
                        <option >Selecione seu nome</option>
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </Select>
                    <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                    <BotaoSortear>Sortear</BotaoSortear>
                </form>
                {amigoSecreto && <ParResultado role='alert'>{amigoSecreto}</ParResultado>}
                <FooterSorteio>
                    <img src="imagens/aviao.png" alt="Imagem de um avião de papel" />

                </FooterSorteio>
            </SectionSorteio>
        </Card>
    )
}

export default Sorteio
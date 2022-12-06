import { useRef, useState } from 'react'
import { useAddPart } from '../state/hooks/useAddPart'

export default function Form() {
    const [name, setName] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)
    const addParticipantOnList = useAddPart()

    const addParticipant = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        addParticipantOnList(name);
        setName('');
        inputRef.current?.focus();

    }

    

    return (
        <form onSubmit={evento => addParticipant}>
            <input
                ref={inputRef}
                value={name}
                onChange={evento => setName(evento.target.value)} 
                type='text'
                placeholder='Insira os nomes dos participantes'
                />

            <button type='submit' disabled={!name}>Adicionar</button>
        </form>
    )
}
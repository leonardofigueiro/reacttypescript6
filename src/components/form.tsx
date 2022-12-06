import { useRef, useState } from 'react'
import { useAddPart } from '../state/hooks/useAddPart'
import { useErrorMessage } from '../state/hooks/useErrorMessage'

export default function Form() {
    const [name, setName] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)
    const addParticipantOnList = useAddPart()

    const errorMessage = useErrorMessage()

    const addParticipant = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        addParticipantOnList(name);
        setName('');
        inputRef.current?.focus();

    }

    return (
        <form onSubmit={addParticipant}>
            <input
                ref={inputRef}
                value={name}
                onChange={evento => setName(evento.target.value)} 
                type='text'
                placeholder='Insira os nomes dos participantes'
                />

            <button type='submit' disabled={!name}>Adicionar</button>
            {errorMessage && <p role='alert'>{errorMessage}</p>}
        </form>
    )
}
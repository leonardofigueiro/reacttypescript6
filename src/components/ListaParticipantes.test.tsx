import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes'
import ListaParticipantes from './ListaParticipantes'

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
describe('Renderizar lista vazia', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('Lista renderizada vazia', () => {
        render(<RecoilRoot><ListaParticipantes/></RecoilRoot>)

        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(0)
    })
})

describe('Renderizar lista preenchida de participantes', () => {
    const participantes = ['Ana Karenina', 'Raskonikov']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('Checar a lista preenchida', () => {
        render(<RecoilRoot><ListaParticipantes/></RecoilRoot>)

        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(participantes.length)
    })
})
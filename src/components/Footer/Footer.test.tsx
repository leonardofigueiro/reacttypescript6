import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../../state/hooks/useSorteador";
import Footer from "./Footer";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})


const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})
jest.mock('../../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('Onde não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('A brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot><Footer/></RecoilRoot>)

        const button = screen.getByRole('button')

        expect(button).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana Karenina', 'Raskonikov', 'Piotr'])
    })
    test('A brincadeira pode ser iniciada', () => {
        render(<RecoilRoot><Footer/></RecoilRoot>)
        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })
    test('A brincadeira foi iniciada', () => {
        render(<RecoilRoot><Footer/></RecoilRoot>)
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)

    })
})
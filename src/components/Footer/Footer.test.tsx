import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipante";
import Footer from "./Footer";

jest.mock('../../state/hooks/useListaDeParticipante', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
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

    })
})
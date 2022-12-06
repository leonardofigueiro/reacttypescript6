import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Form from './form'

//Jest

describe('Comportamento do Form.tsx', () => {

    test('Testar o formulario para impedir cadastro quando o input estiver vazio', () => {
        render(<RecoilRoot><Form/></RecoilRoot>)
    
        //encontrar os elementos do DOM
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const button = screen.getByRole('button')
    
        //garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
    
        //garantir que o botão esteja desabilitado
        expect(button).toBeDisabled()
    
    })
    
    test('Adicionar um participante caso o input esteja preenchido', () => {
        render(<RecoilRoot><Form/></RecoilRoot>)
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const button = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Ana Katarina'
            }
        
        })
        fireEvent.click(button)
        expect(input).toHaveFocus()
        expect(input).toHaveValue('')
    })
    
    test('Nomes duplicados não podem ser adicionados', () => {
        render(<RecoilRoot><Form/></RecoilRoot>)
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Katarina'
            }
        
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Ana Katarina'
            }
        })
        fireEvent.click(button)
        const errorMessage = screen.getByRole('alert')
        expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos!')
    })
    test('Mensagem de erro desaparece após um tempo', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Form/></RecoilRoot>)
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Katarina'
            }
        
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Ana Katarina'
            }
        })
        fireEvent.click(button)
        let errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeInTheDocument()
    
        //espera N segundos
    
        act(() => {
            jest.runAllTimers()
            
          });
        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()
    })

})



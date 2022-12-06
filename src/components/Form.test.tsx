import { fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Form from './form'

//Jest
test('Testar o formulario para impedir cadastro quando o input estiver vazio', () => {
    render(<Form />)

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
    //encontrar os elementos do DOM
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    const button = screen.getByRole('button');

    //inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Ana Katarina'
        }
    
    })
    //clicar no botão de submeter
    fireEvent.click(button)
    //garantir que o cursor voltará pro input (foco ativo)
    expect(input).toHaveFocus()
    //garantir que o input fique vazio
    expect(input).toHaveValue('')
})
import styled from "styled-components";

export default function Header() {
    const DivHeader = styled.header`
    display: flex;
    justify-content: space-around;
    padding-top: 125px;
    @media screen and (max-width: 800px) {
        padding-top: 60px;
        flex-direction: column;
        align-items: center;   
    }
`;
    const Logo = styled.div`
    background-image: url(${function (props) { return props.theme.images.bigLogo }});
    width: 351px;
    height: 117px;
    @media screen and (max-width: 800px) {
        background-image: url(${function (props) { return props.theme.images.smallLogo }});
        width: 235px;
        height: 199px;
    }
`;

    const IllustrationImage = styled.img`
        z-index: 1;
`;
    return (
        <DivHeader>
            <Logo role="img" aria-label='Logo do Sorteador' />
            <IllustrationImage src="imagens/participante.png" />
        </DivHeader>
    )
}
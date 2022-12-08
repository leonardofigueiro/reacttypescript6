
import Card from "../components/Card/card";
import Footer from "../components/Footer/Footer";
import Form from "../components/form";
import ListaParticipantes from "../components/ListaParticipantes";

export default function Configuracao() {
    return (
        <>
            <Card>
                <section>
                    <h2>Vamos começar!</h2>
                    <Form/>
                    <ListaParticipantes/>
                    <Footer/>


                </section>
                
            </Card>
        </>
    )
}
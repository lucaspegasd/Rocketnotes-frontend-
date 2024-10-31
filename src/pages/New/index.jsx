import { Link } from 'react-router-dom'

import { Header } from '../../components/Head';
import { Input } from '../../components/Inputs';
import { Textarea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItems';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="título"/>
                    <Textarea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                          <NoteItem value="react" />
                          <NoteItem isNew placeholder="Nova tag"/>
                       </div>
                    </Section>

                    <Button title="Salvar" />


                </Form>
            </main>
        </Container>
    )
}
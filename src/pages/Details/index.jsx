import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Head";
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details(){

  return(
    <Container>
      <Header />
       <main>
         <Content>
           <ButtonText title="Excluir Nota"/>

           <h1>
             Introdução ao React
           </h1>

           <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati voluptates recusandae 
            aperiam adipisci blanditiis dicta totam architecto iure! Sunt blanditiis deserunt ipsa 
            accusantium, cupiditate atque nisi obcaecati provident animi?
           </p>



           <Section title="Links úteis">
        <Links>
          <li><a  href="#">https://www.rocketseat.com.br</a></li>
          <li><a  href="#">https://www.rocketseat.com.br</a></li>
        </Links>
           </Section>
           <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
           </Section>
      
           <Button title="voltar"/>
         </Content>
       </main>
    </Container>
  )
}
import { Container } from './styles';

export function ButtonText({ title, isActive = false, ...rest }){
    return(
        <Container 
        type="buttom" 
        {...rest}
        $isactive={isActive.toString()}
        >
            {title}
        </Container>
    )
}
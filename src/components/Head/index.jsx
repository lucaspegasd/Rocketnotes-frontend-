import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'


export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img
                 src="https://github.com/lucaspegasd.png"
                 alt="foto do usuario"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Lucas Debiase</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />

            </Logout>

        </Container>
    )
}
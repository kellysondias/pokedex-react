import styled from 'styled-components'

export const Header = ({children}) => {
    return (
        <header>
            <Heading>Pokédex</Heading>
        </header>
    )
}

const Heading = styled.h1`
    color: #ffcc06;
    font-size: 7rem;
    font-weight: 900;
    margin
`
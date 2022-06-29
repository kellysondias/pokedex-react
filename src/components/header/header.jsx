import styled from 'styled-components'

export const Header = ({children}) => {
    return (
        <header>
            <Heading>PokéDex</Heading>
        </header>
    )
}

const Heading = styled.h1`
    color: #ffcc06;
    font-size: 3.2rem;
    font-weight: 900;
    margin
`
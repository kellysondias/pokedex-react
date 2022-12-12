import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-family: "Press Start 2P", monospace;
    background-color: ${(props) => props.theme.headerBackground};
    padding-top: 5px;

    h1 {
        font-size: 3.5rem;
        font-weight: "400";
        margin-left: 2.4rem;
    }

    a {
        color: ${(props) => props.theme.headerColor};
    }

    @media (max-width: 620px) {
        flex-direction: column-reverse;
        padding-bottom: 3.2rem;

        h1 {
            margin-left: 0;
            text-align: center;
        }
}
`

export const Header = styled.h1`
    font-size: 3.5rem;
    font-weight: "400";
    margin-left: 2.4rem;
}
`
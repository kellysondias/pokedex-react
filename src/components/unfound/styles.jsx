import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 550px;
`

export const Image = styled.img`
    width: 100%;
    padding-top: 1rem;
    margin-bottom: 2rem;
    background-color: ${(props) => props.theme.unfoundImageBg}
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 50px;
    margin-bottom: 2rem;
    border-radius: 10px;
    width: 80%;
`

export const Header = styled.h2`
    font-size: 2rem;
    color: #E3350D;
    margin-bottom: 0.5rem;
`

export const Text = styled.span`
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.unfoundText};
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ListItem = styled.li`
    color: ${(props) => props.theme.unfoundSuggestions};
    font-size: 1.4rem;
    list-style: disc;
`
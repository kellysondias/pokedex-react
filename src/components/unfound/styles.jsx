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
    margin-bottom: 2rem;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 50px;
    margin-bottom: 2rem;
    color: #616161;
    border: 2px solid #E3350D;
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
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ListItem = styled.li`
    color: #919191;
    font-size: 1.4rem;
    list-style: disc;
`
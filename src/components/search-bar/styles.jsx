import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 2rem;
    
`

export const Header = styled.h2`
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: 1rem;
`

export const SearchField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 300px;
    gap: 1.5rem;
`

export const SearchInput = styled.input`
    border: 3px solid #616161;
    border-radius: 5px;
    color: #313131;
    margin: 0;
    width: 70.98%;
    padding: 1.5rem 0.5rem;
    font-family: 'VT323', monospace;
    font-size: 1.8rem;
`

export const Button = styled.img`
    background-color: #ee6b2f;
    padding: 15px 12px;
    border-radius: 5px;
    cursor: pointer;
`
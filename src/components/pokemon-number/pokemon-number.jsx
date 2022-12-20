export const PokemonNumber = ({id}) => (
    id < 100 ?
    id < 10 ? 
    <span>{`#00${id}`}</span> : 
    <span>{`#0${id}`}</span> :
    <span>{`#${id}`}</span>
)

export default PokemonNumber
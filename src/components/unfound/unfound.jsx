import { Strings } from "../../strings"
import Missingno from "../../img/unfound.png"
import { Flex, Image, ListItem } from "./styles"

export const Unfound = () => (
    <Flex>
        <Image src={Missingno} alt={Strings.components.unfound.alt} />

        <h2>{Strings.components.unfound.header}</h2>

        <span>{Strings.components.unfound.text}</span>

        <ul>
            {Strings.components.unfound.suggestions.map((suggestion) => <ListItem>{suggestion}</ListItem>)}
        </ul>

    </Flex>
)
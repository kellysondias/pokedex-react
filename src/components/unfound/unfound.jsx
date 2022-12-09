import { Strings } from "../../strings"
import Missingno from "../../img/unfound.png"
import { Box, Flex, Header, Image, List, ListItem, Text } from "./styles"

export const Unfound = () => (
    <Flex>
        <Image src={Missingno} alt={Strings.components.unfound.alt} />

        <Box>
            <Header>{Strings.components.unfound.header}</Header>
            
            <Text>{Strings.components.unfound.text}</Text>
            
            <List>
                {Strings.components.unfound.suggestions.map((suggestion) => <ListItem>{suggestion}</ListItem>)}
            </List>
        </Box>

    </Flex>
)
import { Strings } from "../../strings"
import Missingno from "../../img/unfound.png"
import { Box, Flex, Header, Image, List, ListItem, Text } from "./styles"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-switcher";

export const Unfound = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Flex>
            <Image
                src={Missingno}
                alt={Strings.components.unfound.alt}
                theme={theme}
            />

            <Box>
                <Header>{Strings.components.unfound.header}</Header>
            
                <Text theme={theme}>{Strings.components.unfound.text}</Text>
            
                <List>
                    {Strings.components.unfound.suggestions.map((suggestion) => <ListItem theme={theme}>{suggestion}</ListItem>)}
                </List>
            </Box>
        </Flex>
    )
}
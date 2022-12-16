import { strings } from "../../strings"
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
                alt={strings.components.unfound.alt}
                theme={theme}
            />

            <Box>
                <Header>{strings.components.unfound.header}</Header>
            
                <Text theme={theme}>{strings.components.unfound.text}</Text>
            
                <List>
                    {strings.components.unfound.suggestions.map((suggestion) => <ListItem theme={theme}>{suggestion}</ListItem>)
                    }
                </List>
            </Box>
        </Flex>
    )
}
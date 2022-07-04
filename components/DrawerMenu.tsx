import {
    Box,
    Text,
    VStack,
    HStack,
    Divider,
    Pressable
  } from "native-base";
import {useMemo} from 'react';
import { Ionicons } from 'react-native-vector-icons';

// custom imports
import themeUtils from '../theme';

function DrawerMenu(props: any) {
    const r = props.state.routes;
    const routes = useMemo(() => {
        return props?.state?.routes;
    }, [r]);
    // console.log(routes)
    return (
        <Box>
            <Box size={40}>

            </Box>
            <Divider />
            <Box bg={themeUtils.getColorBackground()} p={1}>
                <VStack space={2}>
                    {routes.map((route: any) => {
                        return(
                            <Pressable key={route.key} onPress={() => props.navigation.navigate(route.name)}>
                                {({
                                    isPressed
                                }) => {
                                    return (
                                        <Box bg={isPressed ? "coolGray.100" : themeUtils.getColorBackground()}>
                                            <HStack  mt={3} mb={3} ml={7} alignItems="center">
                                                {getIcon(route.name)}
                                                <Text ml={5} fontSize={20}>{route.name}</Text>
                                            </HStack>
                                        </Box>
                                    )
                                }}
                            </Pressable>
                        )
                    })}
                </VStack>
            </Box>
        </Box>
    );
}

function getIcon(name: string) {
    let iconName;
  
    if (name === 'Profile') {
        iconName = 'person-outline';
    } else if (name === 'Lists') {
        iconName = 'list-outline'
    } else if (name === 'Topics') {
        iconName = 'pricetags-outline'
    } else if (name === 'Bookmarks') {
        iconName = 'bookmark-outline' 
    } else if (name === 'Moments') {
        iconName = 'flash-outline' 
    } else if (name === 'Monetization') {
        iconName = 'cash-outline' 
    }  else if (name === 'Landing') {
        iconName = 'apps-outline' 
    }
    // You can return any component that you like here!
    return <Ionicons 
            name={iconName} size={25} 
            color={themeUtils.getColorForeground()} 
            // style={{ marginLeft: 20 }} 
            />;
}

export default DrawerMenu;
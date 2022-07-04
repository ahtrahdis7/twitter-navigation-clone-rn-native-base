import {
    Box,
    Text,
    VStack,
    HStack,
    Divider,
    Pressable
} from "native-base";
import { useWindowDimensions } from 'react-native';
import {useMemo} from 'react';
import { Ionicons } from 'react-native-vector-icons';

// custom imports
import themeUtils from '../theme';
import NativeBaseIcon from './NativeBaseIcon';

function DrawerMenu(props: any) {
    const r = props.state.routes;
    const { width, height } = useWindowDimensions();
    const routes = useMemo(() => {
        return props?.state?.routes;
    }, [r]);

    return (
        <Box>
            <Box w={width * 0.8} h={height * 0.21}>
                <Header />
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
                                                <Text ml={5} fontSize={18}>{route.name}</Text>
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

function Header(){
    return (
        <Box p={7} ml={1}>
            <VStack>
                <Box mb={2}>
                    <NativeBaseIcon size={60} />
                </Box>
                <Text bold fontSize={18}>Sidhartha Mallick</Text>
                <Text fontSize={16} color={"gray.600"}>@ahtrahdis7</Text>
                <HStack mt={3} mb={3}>
                    <Text bold fontSize={14}>14 {" "}</Text>
                    <Text fontSize={14} color={"gray.600"}>Followers {" "}</Text>
                    <Text bold fontSize={14}>16 {" "}</Text>
                    <Text fontSize={14} color={"gray.600"}>Following</Text>
                </HStack>
            </VStack>
        </Box>
    )
}

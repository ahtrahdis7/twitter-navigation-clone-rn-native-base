import {
    Box,
    Text,
    VStack,
    HStack,
    Divider,
    Pressable,
    Flex,
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
        <Box bg={themeUtils.getColorBackground()}>
            <Box w={width * 0.8} h={height * 0.21}>
                <Header />
            </Box>
            <Divider />
            <Box p={1}>
                <VStack space={2}>
                    {routes.map(({ name, key } : RoutesProps) => {
                        if(name !== "connect")
                        return <DrawerItem key={key} name={name} onPress={() => props.navigation.navigate(name)} />
                    })}
                </VStack>
            </Box>
            <Divider />
            <Box mt={2.5} mb={2.5}>
                <Pressable onPress={() => props.navigation.navigate('connect')}>
                    {({
                        isPressed
                    }) => {
                        return (
                            <Box bg={isPressed ? "coolGray.100" : themeUtils.getColorBackground()}>
                                <HStack  mt={2} mb={2} ml={6} alignItems="center">
                                    {getIcon("connect")}
                                    <Text ml={5} fontSize={18}>Twitter for Professionals</Text>
                                </HStack>
                            </Box>
                        )
                    }}
                </Pressable>
            </Box>
            <Divider />
            <VStack>
                <Text ml={5} mt={4} fontSize={18}>Settings and Privacy</Text>
                <Text ml={5} mt={4} fontSize={18}>Help Center</Text>
            </VStack>
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
    } else if (name === 'connect') {
        iconName = 'rocket-outline' 
    } else {
        iconName = 'footsteps-outline'
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
        <Box p={6}>
            <VStack>
                <Box mb={2}>
                    <NativeBaseIcon size={"60px"} />
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

function DrawerItem({name, onPress} : DrawerItem) {
    return (
        <Pressable onPress={onPress}>
            {({
                isPressed
            }) => {
                return (
                    <Box bg={isPressed ? "coolGray.100" : themeUtils.getColorBackground()}>
                        <HStack  mt={2} mb={2} ml={5} alignItems="center">
                            {getIcon(name)}
                            <Text ml={5} fontSize={18}>{name}</Text>
                        </HStack>
                    </Box>
                )
            }}
        </Pressable>
    )
}


interface RoutesProps {
    name: string,
    key: string
}

interface DrawerItem {
    name: string,
    onPress: () => void
}
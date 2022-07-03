import { useColorMode } from "native-base";
import { StatusBar } from "react-native";

function ProStatusBar() {
  const { colorMode } = useColorMode();
  return (
    <StatusBar
      backgroundColor={colorMode == "light" ? "#f8fafc" : "#0f172a"}
      barStyle={colorMode == "light" ? "dark-content" : "light-content"}
    />
  );
}

export default ProStatusBar;
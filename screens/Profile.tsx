import React from "react";
import { Text, Center } from "native-base";

function Profile() {
  return (
    <Center 
    _dark={{ bg: "blueGray.900" }} 
    _light={{ bg: "blueGray.50" }}
    px={4}
    flex={1}>
      <Text>
        {" "}
        Profile Screen
      </Text>
    </Center>
  );
}

export default Profile;

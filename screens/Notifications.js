import React from "react";
import { Text, View } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import { logUserOut } from "../apollo";

export default function Feed() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Notification</Text>
      <AuthButton onPress={() => logUserOut()} text="Log Out"></AuthButton>
    </View>
  );
}

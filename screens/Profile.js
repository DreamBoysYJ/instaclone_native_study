import React from "react";
import { Button, Text, View } from "react-native";
import { logUserOut } from "../apollo";
import AuthButton from "../components/auth/AuthButton";

export default function Profile() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Someone's Profile</Text>
      <AuthButton onPress={() => logUserOut()}>LOG OUT</AuthButton>
    </View>
  );
}

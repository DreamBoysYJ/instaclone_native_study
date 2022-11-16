import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onDone = () => {
    alert("done!");
  };

  return (
    <AuthLayout>
      <KeyboardAvoidingView
        style={{
          width: "100%",
        }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
      >
        <TextInput
          placeholder="First Name"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(lastNameRef)}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(usernameRef)}
        />
        <TextInput
          ref={usernameRef}
          placeholder="Username"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(emailRef)}
        />
        <TextInput
          ref={emailRef}
          onSubmitEditing={() => onNext(passwordRef)}
          placeholder="Email"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          keyboardType="email-address"
          style={{ backgroundColor: "white", width: "100%" }}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="done"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={onDone}
        />
        <AuthButton
          text="Create Account"
          disabled={true}
          onPress={() => null}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}

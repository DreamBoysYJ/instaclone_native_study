import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("username");
    register("email");
    register("password");
  }, [register]);

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
          onSubmitEditing={() => onNext(lastNameRef)}
          onChangeText={(text) => setValue("firstName", text)}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          onSubmitEditing={() => onNext(usernameRef)}
          onChangeText={(text) => setValue("lastName", text)}
        />
        <TextInput
          ref={usernameRef}
          placeholder="Username"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
          autoCapitalize="none"
          onChangeText={(text) => setValue("username", text)}
        />
        <TextInput
          ref={emailRef}
          onSubmitEditing={() => onNext(passwordRef)}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          keyboardType="email-address"
          onChangeText={(text) => setValue("email", text)}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="done"
          onSubmitEditing={onDone}
          onChangeText={(text) => setValue("password", text)}
          onPress={handleSubmit(onValid)}
        />
        <AuthButton
          text="Create Account"
          disabled={true}
          onPress={handleSubmit(onValid)}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}

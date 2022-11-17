import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({ navigation }) {
  const { register, handleSubmit, setValue, getValues } = useForm();

  const onCompleted = (data) => {
    const {
      createAccount: { ok },
    } = data;
    const { username, password } = getValues();
    if (ok) {
      navigation.navigate("LogIn", { username, password });
    }
  };

  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    { onCompleted }
  );

  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: { ...data },
      });
    }
  };

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
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
          onChangeText={(text) => setValue("password", text)}
          onSubmitEditing={handleSubmit(onValid)}
        />
        <AuthButton
          text="Create Account"
          disabled={false}
          onPress={handleSubmit(onValid)}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}

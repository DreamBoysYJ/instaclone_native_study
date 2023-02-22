import React from "react";
import { colors } from "../colors";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Wrapper = styled.view`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const Column = styled.view`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;

const Username = styled.Text`
  font-weight: 600;
  color: white;
`;

const FollowBtn = styled.TouchableOpacity`
  background-color: ${colors.blue};
  justify-content: center;
  padding: 5px 10px;
  border-radius: 4px;
`;

const FollowBtnText = styled.Text`
  color: white;
  font-weight: 600;
`;

export default function UserRow({ avatar, username, isFollowing, isMe, id }) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Column onPress={() => navigation.navigate("profile", { username, id })}>
        <Avatar source={{ uri: avatar }} />
        <Username>{username}</Username>
      </Column>
      {!isMe ? (
        <FollowBtn>
          <FollowBtnText>{isFollowing ? "unfollow" : "follow"}</FollowBtnText>
        </FollowBtn>
      ) : null}
    </Wrapper>
  );
}

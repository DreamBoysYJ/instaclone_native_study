import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Image, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View``;
const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text`
  color: white;
`;
const Likes = styled.Text`
  color: white;
`;

function Photo({ id, user, caption, file, isLiked, likes }) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 450);
  useEffect(() => {
    Image.getSize(
      "http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/12/31/GKRZjZYBpPhE637765486789400308.jpg",
      (width, height) => {
        setImageHeight(height / 3);
      },
      [
        "http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/12/31/GKRZjZYBpPhE637765486789400308.jpg",
      ]
    );
  });
  return (
    <Container>
      <Header onPress={() => navigation.navigate("Profile")}>
        <UserAvatar
          resizeMode="cover"
          source={{
            uri: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/08/19/50d2cee1-f43e-4cf7-910e-9151e36b623d.jpg",
          }}
        />
        <Username>{user.username}</Username>
      </Header>
      <File
        resizeMode="cover"
        style={{ width, height: imageHeight }}
        source={{
          uri: "http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/12/31/GKRZjZYBpPhE637765486789400308.jpg",
        }}
      />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
      <Caption>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Username>{user.username}</Username>
        </TouchableOpacity>

        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};
export default Photo;

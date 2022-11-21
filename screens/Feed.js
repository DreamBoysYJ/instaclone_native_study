import React from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import { logUserOut } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import { ScrollView } from "react-native-gesture-handler";
import ScreenLayout from "../components/ScreenLayout";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed() {
  const { data, loading } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}>{photo.caption}</Text>
      </View>
    );
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(photo) => photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}

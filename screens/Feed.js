import React from "react";
import { Text, View, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import AuthButton from "../components/auth/AuthButton";
import ScreenLayout from "../components/ScreenLayout";
import Photo from "../components/Photo";
import { useState } from "react";

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
  const { data, loading, refetch } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };

  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshing={refreshing}
        onRefresh={refresh}
        data={data?.seeFeed}
        keyExtractor={(photo) => photo.id}
        renderItem={renderPhoto}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
}

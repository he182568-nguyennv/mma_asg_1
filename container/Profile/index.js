import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfileList from "./ProfileList";
import ProfileFooter from "./ProfileFooter";
import { useTheme } from "../../context/ThemeContext";

const Profile = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <ProfileHeader />
      <ProfileList navigation={navigation} />
      <ProfileFooter />
    </ScrollView>
  );
};

export default Profile;

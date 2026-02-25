import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { useProfile } from "../../context/ProfileContext";

const ProfileHeader = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  // Đọc profile từ context chung → tự cập nhật khi Game screen lưu
  const { profileInfo } = useProfile();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Backgroud.png")}
        style={styles.headerBackground}
      />

      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <Avatar
            size={100}
            rounded
            title={profileInfo.name.charAt(0).toUpperCase()}
            containerStyle={{ backgroundColor: theme.primary }}
            titleStyle={{ fontSize: 40 }}
          >
            <Avatar.Accessory
              name="pencil-outline"
              type="ionicon"
              color="white"
              size={30}
              style={{ backgroundColor: "#5f6368" }}
              onPress={() =>
                navigation.navigate("Edit Profile", { startEditing: true })
              }
            />
          </Avatar>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.userName}>{profileInfo.name}</Text>
          <Text style={styles.emailText}>{profileInfo.email}</Text>
          <Text style={styles.subTitle}>{profileInfo.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.card,
    },
    headerBackground: {
      width: "100%",
      height: 150,
      backgroundColor: theme.headerBg,
    },
    contentContainer: {},
    avatarContainer: {
      alignItems: "center",
      marginTop: -50,
    },
    infoContainer: {
      marginTop: 10,
      alignItems: "center",
      paddingBottom: 16,
    },
    userName: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.text,
    },
    subTitle: {
      fontSize: 14,
      color: theme.subText,
      marginTop: 5,
    },
    emailText: {
      fontSize: 13,
      color: theme.primary,
      marginTop: 4,
    },
  });

export default ProfileHeader;

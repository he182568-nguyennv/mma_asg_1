import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { useTheme } from "../../context/ThemeContext";

const ProfileList = ({ navigation }) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const list = [
    {
      name: "Settings",
      avatar_url: require("../../assets/Setting.png"),
      subtitle: "",
      onPress: () => navigation.navigate("Settings"),
    },
    {
      name: "Support",
      avatar_url: require("../../assets/Support.png"),
      subtitle: "",
    },
    {
      name: "Logout",
      avatar_url: require("../../assets/Logout.png"),
      subtitle: "",
    },
  ];

  return (
    <View style={styles.container}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={l.onPress}
          containerStyle={styles.listItem}
        >
          <Avatar source={l.avatar_url} rounded />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
            {l.subtitle ? (
              <ListItem.Subtitle style={styles.sub}>
                {l.subtitle}
              </ListItem.Subtitle>
            ) : null}
          </ListItem.Content>
          <ListItem.Chevron color={theme.subText} />
        </ListItem>
      ))}
    </View>
  );
};

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: theme.background,
    },
    listItem: {
      backgroundColor: theme.card,
      borderBottomColor: theme.border,
    },
    title: {
      fontSize: 15,
      fontWeight: "bold",
      color: theme.text,
    },
    sub: {
      fontSize: 12,
      color: theme.subText,
    },
  });

export default ProfileList;

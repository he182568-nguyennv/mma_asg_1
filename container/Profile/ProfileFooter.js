import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const ProfileFooter = () => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>myFPT Version 5.9.10</Text>
      <Text style={styles.title2}>Copyright @FPT Software 2021</Text>
    </View>
  );
};

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: theme.card,
      paddingTop: 20,
      paddingBottom: 20,
      gap: 5,
      borderTopWidth: 1,
      borderTopColor: theme.border,
    },
    title1: {
      textAlign: "center",
      color: theme.subText,
      fontSize: 12,
    },
    title2: {
      textAlign: "center",
      color: theme.subText,
      fontSize: 12,
    },
  });

export default ProfileFooter;

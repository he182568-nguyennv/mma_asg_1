import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";

const SettingsScreen = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giao diện</Text>

      {/* Dark mode toggle */}
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <Text style={styles.rowIcon}>{isDark ? "🌙" : "☀️"}</Text>
          <View>
            <Text style={styles.rowTitle}>
              {isDark ? "Chế độ tối" : "Chế độ sáng"}
            </Text>
            <Text style={styles.rowSub}>
              {isDark ? "Đang dùng nền tối" : "Đang dùng nền sáng"}
            </Text>
          </View>
        </View>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: "#D1D5DB", true: theme.primary }}
          thumbColor={isDark ? "#fff" : "#fff"}
        />
      </View>

      {/* Preview */}
      <View style={styles.previewCard}>
        <Text style={styles.previewTitle}>Xem trước</Text>
        <View style={styles.previewInner}>
          <View
            style={[styles.previewBlock, { backgroundColor: theme.primary }]}
          />
          <View style={styles.previewText}>
            <Text style={styles.previewName}>Phạm Quang Khang</Text>
            <Text style={styles.previewSub}>
              {isDark ? "Nền tối • active" : "Nền sáng • active"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    heading: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.subText,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 12,
      marginTop: 8,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.card,
      padding: 16,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.border,
    },
    rowLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    rowIcon: {
      fontSize: 26,
    },
    rowTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.text,
    },
    rowSub: {
      fontSize: 12,
      color: theme.subText,
      marginTop: 2,
    },
    previewCard: {
      marginTop: 28,
      backgroundColor: theme.card,
      borderRadius: 14,
      padding: 16,
      borderWidth: 1,
      borderColor: theme.border,
    },
    previewTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.subText,
      marginBottom: 12,
      textTransform: "uppercase",
      letterSpacing: 0.8,
    },
    previewInner: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
    },
    previewBlock: {
      width: 44,
      height: 44,
      borderRadius: 22,
    },
    previewText: {},
    previewName: {
      fontSize: 15,
      fontWeight: "bold",
      color: theme.text,
    },
    previewSub: {
      fontSize: 12,
      color: theme.subText,
      marginTop: 2,
    },
  });

export default SettingsScreen;

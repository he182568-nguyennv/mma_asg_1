import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Avatar } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "../context/ThemeContext";
import { useProfile } from "../context/ProfileContext";

// ─── Yup Validation Schema ────────────────────────────────────────────────────
const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Tên phải có ít nhất 3 ký tự")
    .required("Tên là bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  subtitle: Yup.string().optional(),
});

// ─── Component ────────────────────────────────────────────────────────────────
const EditProfileScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  // Đọc và cập nhật profile từ context chung
  const { profileInfo, updateProfile } = useProfile();
  // Nếu navigate với param startEditing: true thì mở thẳng form chỉnh sửa
  const [isEditing, setIsEditing] = useState(
    route?.params?.startEditing ?? false,
  );
  const styles = makeStyles(theme);

  const handleSave = (values) => {
    updateProfile(values);
    setIsEditing(false);
    navigation.goBack(); // Quay về trang Profile
  };
  const handleCancel = () => {
    setIsEditing(false);
    navigation.goBack(); // Quay về trang Profile
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.container}>
        {/* Header background */}
        <ImageBackground
          source={require("../assets/Backgroud.png")}
          style={styles.headerBackground}
        />

        {/* Avatar */}
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
              onPress={() => setIsEditing(true)}
            />
          </Avatar>
        </View>

        {isEditing ? (
          // ── EDIT MODE: Formik Form ──────────────────────────────────────────
          <Formik
            initialValues={{
              name: profileInfo.name,
              email: profileInfo.email,
              subtitle: profileInfo.subtitle,
            }}
            validationSchema={ProfileSchema}
            onSubmit={handleSave}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.formContainer}>
                <Text style={styles.sectionLabel}>Chỉnh sửa hồ sơ</Text>

                {/* Name */}
                <Text style={styles.fieldLabel}>Họ và tên *</Text>
                <TextInput
                  style={[
                    styles.input,
                    touched.name && errors.name ? styles.inputError : null,
                  ]}
                  placeholder="Nhập tên..."
                  placeholderTextColor={theme.subText}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}

                {/* Email */}
                <Text style={styles.fieldLabel}>Email *</Text>
                <TextInput
                  style={[
                    styles.input,
                    touched.email && errors.email ? styles.inputError : null,
                  ]}
                  placeholder="Nhập email..."
                  placeholderTextColor={theme.subText}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                {/* Subtitle */}
                <Text style={styles.fieldLabel}>Chức vụ</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập chức vụ..."
                  placeholderTextColor={theme.subText}
                  value={values.subtitle}
                  onChangeText={handleChange("subtitle")}
                  onBlur={handleBlur("subtitle")}
                />

                {/* Buttons */}
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleCancel}
                  >
                    <Text style={styles.cancelButtonText}>Hủy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.saveButtonText}>Lưu</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        ) : (
          // ── VIEW MODE ──────────────────────────────────────────────────────
          <View style={styles.infoContainer}>
            <Text style={styles.userName}>{profileInfo.name}</Text>
            <Text style={styles.subTitle}>{profileInfo.subtitle}</Text>
            <Text style={styles.emailText}>{profileInfo.email}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.editButtonText}>✏️ Chỉnh sửa hồ sơ</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// ─── Styles factory (theme-aware) ─────────────────────────────────────────────
const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    headerBackground: {
      width: "100%",
      height: 150,
      backgroundColor: theme.headerBg,
    },
    avatarContainer: {
      alignItems: "center",
      marginTop: -50,
    },
    infoContainer: {
      marginTop: 16,
      alignItems: "center",
      paddingHorizontal: 24,
    },
    userName: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.text,
      textAlign: "center",
    },
    subTitle: {
      fontSize: 14,
      color: theme.subText,
      marginTop: 4,
    },
    emailText: {
      fontSize: 13,
      color: theme.primary,
      marginTop: 4,
    },
    editButton: {
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 28,
      backgroundColor: theme.primary,
      borderRadius: 24,
    },
    editButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 14,
    },
    formContainer: {
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 40,
    },
    sectionLabel: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: 20,
      textAlign: "center",
    },
    fieldLabel: {
      fontSize: 13,
      fontWeight: "600",
      color: theme.subText,
      marginBottom: 4,
      marginTop: 12,
    },
    input: {
      backgroundColor: theme.inputBg,
      borderWidth: 1,
      borderColor: theme.inputBorder,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 10,
      fontSize: 15,
      color: theme.text,
    },
    inputError: {
      borderColor: theme.error,
    },
    errorText: {
      color: theme.error,
      fontSize: 12,
      marginTop: 4,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 28,
      gap: 12,
    },
    cancelButton: {
      flex: 1,
      paddingVertical: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.border,
      alignItems: "center",
    },
    cancelButtonText: {
      color: theme.subText,
      fontWeight: "600",
      fontSize: 15,
    },
    saveButton: {
      flex: 1,
      paddingVertical: 12,
      borderRadius: 10,
      backgroundColor: theme.primary,
      alignItems: "center",
    },
    saveButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 15,
    },
  });

export default EditProfileScreen;

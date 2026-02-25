import { Text, View, StyleSheet, Button } from "react-native";

// Ví dụ: trong Home.js
const Home = ({ navigation }) => (
  <View>
    <Button
      title="Go to Profile"
      onPress={() => navigation.navigate("Profile")}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Home;

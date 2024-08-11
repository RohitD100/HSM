import { Alert, Button, StyleSheet, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={[styles.container]}>
      <Button
        onPress={() => Alert.alert("Button with adjusted color pressed")}
        title="Explore Screen"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9EC9F4",
    justifyContent: "center",
    alignItems: "center",
  },
});

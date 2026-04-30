import { Pressable, View, StyleSheet, Text } from "react-native";
const LargeButton = ({
  color = "blue",
  textColor = "white",
  title,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.containerRoot, pressed && styles.opacity]}
      onPress={onPress}
    >
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerRoot: {
    width: 250,
    height: 70,
    elevation: 2,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
  },
  opacity: {
    opacity: 0.8,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default LargeButton;

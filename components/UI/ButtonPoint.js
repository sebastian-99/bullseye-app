import { Pressable, View, StyleSheet, Text } from "react-native";
const ButtonPoint = ({
  color = "blue",
  textColor = "white",
  borderColor = "black",
  title,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.containerRoot, pressed && styles.opacity]}
      onPress={onPress}
    >
      <View style={[styles.button, { backgroundColor: color }]}>
        <View style={[styles.textCurve, { borderColor: borderColor }]}>
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerRoot: {
    width: 50,
    height: 50,
    elevation: 2,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  opacity: {
    opacity: 0.8,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  textCurve: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "transparent",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonPoint;

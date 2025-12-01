import { Pressable, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const ButtonIcon = ({
  color = "blue",
  iconColor = "white",
  icon,
  onPress,
  size = 20,
  disabled,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.containerRoot,
        pressed && styles.opacity,
        disabled && styles.opacity,
      ]}
      onPress={onPress}
    >
      <View style={[styles.button, { backgroundColor: color }]}>
        <FontAwesome
          size={size}
          name={icon}
          color={iconColor}
          style={styles.icon}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerRoot: {
    width: 100,
    height: 50,
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
  icon: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ButtonIcon;

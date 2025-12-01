import { Pressable, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
/**
 *
 * @param {"Font" | "Material"} iconType - Es el tipo de libreia que se va a utilizar (FontAwesome o MaterialCommunityIcons).
 */
const IconHeader = ({
  iconColor = "white",
  icon,
  onPress,
  size = 20,
  iconType = "Font",
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.containerRoot, pressed && styles.opacity]}
      onPress={onPress}
    >
      {iconType == "Font" ? (
        <FontAwesome
          size={size}
          name={icon}
          color={iconColor}
          style={styles.icon}
        />
      ) : (
        <MaterialCommunityIcons
          size={size}
          name={icon}
          color={iconColor}
          style={styles.icon}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerRoot: {
    marginRight: 20,
  },
  opacity: {
    opacity: 0.8,
  },
  icon: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default IconHeader;

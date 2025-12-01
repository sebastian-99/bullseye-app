import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../../utils/Color";
const ScoreCard = ({ points, arrows }) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerText}>
        <FontAwesome size={20} name="hashtag" style={styles.icon} />
        <Text style={styles.text}>Puntos: </Text>
        <Text style={styles.textNumber}>{points}</Text>
      </View>
      <View style={styles.containerText}>
        <MaterialCommunityIcons
          size={20}
          name="bullseye-arrow"
          style={styles.icon}
        />
        <Text style={styles.text}>Flechas: </Text>
        <Text style={styles.textNumber}>{arrows}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    width: 200,
    height: 100,
    borderRadius: 10,
    backgroundColor: Color.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    flexDirection: "row",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
  textNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
    marginTop: 3,
  },
});

export default ScoreCard;

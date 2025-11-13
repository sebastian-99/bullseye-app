import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Target from "../components/Target";
const TargetPage = () => {
  const [points, setPoints] = useState({
    points: 0,
    arrows: 0,
  });
  const targetHit = (hitted) => {
    setPoints((prev) => {
      const newPoints = prev.points + hitted;
      const newArrows = prev.arrows + 1;
      return {
        ...prev,
        points: newPoints,
        arrows: newArrows,
      };
    });
  };
  const resetGame = () => {
    setPoints({
      points: 0,
      arrows: 0,
    });
  };
  const missedHit = () => {
    setPoints((prev) => {
      return {
        ...prev,
        arrows: prev.arrows + 1,
      };
    });
  };
  return (
    <View style={styles.containerRoot}>
      <View style={styles.containerCol}>
        <View style={styles.containerPoints}>
          <View style={styles.containerCard}>
            <View style={styles.containerText}>
              <FontAwesome size={20} name="hashtag" style={styles.icon} />
              <Text style={styles.text}>Puntos: </Text>
              <Text style={styles.textNumber}>{points.points}</Text>
            </View>
            <View style={styles.containerText}>
              <MaterialCommunityIcons
                size={20}
                name="bullseye-arrow"
                style={styles.icon}
              />
              <Text style={styles.text}>Flechas: </Text>
              <Text style={styles.textNumber}>{points.arrows}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerTarget}>
          <Target onPress={targetHit} />
        </View>
        <View style={styles.containerButton}>
          <Button title="fallida" onPress={missedHit} color="#f1601dff" />
          <Button title="Reiniciar" onPress={resetGame} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRoot: {
    backgroundColor: "#615f5fff",
    flex: 1,
  },
  containerCol: {
    flex: 1,
    flexDirection: "column",
  },
  containerPoints: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCard: {
    width: 200,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#78cff8ff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTarget: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  containerText: {
    flexDirection: "row",
    marginVertical: 10,
  },
  containerButton: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
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

export default TargetPage;

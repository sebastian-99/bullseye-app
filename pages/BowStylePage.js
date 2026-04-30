import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../utils/Color";
import LargeButton from "../components/UI/LargeButton";
const BowStylePage = ({ navigation }) => {
  const handleBowStyleSelection = (style) => {
    //Aquí se selecciona si es compuesto o recurvo y se camibia a la siguiente pantalla
    navigation.navigate("Target", { bowStyle: style });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../assets/img/archery-chan-line.png")}
        />
      </View>
      <View style={styles.containerButtons}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Outdoor</Text>
          <Text style={[styles.title, { marginTop: 5 }]}>
            Selecciona el estilo de arco
          </Text>
        </View>
        <View style={styles.containerInnerButton}>
          <LargeButton
            title="Recurvo"
            color={COLORS.primaryBlue}
            onPress={() => handleBowStyleSelection("recurve")}
          />
        </View>
        <View style={styles.containerInnerButton}>
          <LargeButton
            title="Compuesto"
            color={COLORS.primaryBlue}
            onPress={() => handleBowStyleSelection("compound")}
          />
        </View>
        <View style={styles.containerInnerButton}>
          <View style={styles.horizontalLine}></View>
          <LargeButton
            title="Contador Manual"
            color={COLORS.primaryBlue}
            onPress={() => navigation.navigate("manualCounter")}
          />
        </View>
      </View>
    </View>
  );
};

export default BowStylePage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButtons: {
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerTitle: {
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerInnerButton: {
    marginVertical: 15,
  },
  horizontalLine: {
    borderTopColor: "white",
    borderTopWidth: 1,
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
});

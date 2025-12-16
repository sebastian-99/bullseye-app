import { View, StyleSheet } from "react-native";
import ButtonPoint from "../UI/ButtonPoint";
import Color from "../../utils/Color";
const PointsContainer = ({ onPress }) => {
  const buttons = {
    firstRow: [
      {
        number: 1,
        color: "white",
        textColor: "black",
      },
      {
        number: 2,
        color: "white",
        textColor: "black",
      },
      {
        number: 3,
        color: "black",
        textColor: "white",
        borderColor: "white",
      },
      {
        number: 4,
        color: "black",
        textColor: "white",
        borderColor: "white",
      },
      {
        number: 5,
        color: Color.primaryBlue,
        textColor: "black",
      },
    ],
    secondRow: [
      {
        number: 6,
        color: Color.primaryBlue,
        textColor: "black",
      },
      {
        number: 7,
        color: "red",
        textColor: "black",
      },
      {
        number: 8,
        color: "red",
        textColor: "black",
      },
      {
        number: 9,
        color: "yellow",
        textColor: "black",
      },
      {
        number: 10,
        color: "yellow",
        textColor: "black",
      },
    ],
  };
  return (
    <View style={styles.containerPoints}>
      <View style={styles.containerPointsInner}>
        {buttons.firstRow.map((button, index) => (
          <View key={index}>
            <ButtonPoint
              title={button.number}
              color={button.color}
              borderColor={button.borderColor}
              textColor={button.textColor}
              onPress={() => onPress(button.number)}
            />
          </View>
        ))}
      </View>
      <View style={[styles.containerPointsInner, { marginTop: 10 }]}>
        {buttons.secondRow.map((button, index) => (
          <View key={index}>
            <ButtonPoint
              title={button.number}
              color={button.color}
              borderColor={button.borderColor}
              textColor={button.textColor}
              onPress={() => onPress(button.number)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPoints: {
    flexDirection: "column",
  },
  containerPointsInner: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default PointsContainer;

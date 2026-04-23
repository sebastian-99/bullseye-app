import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import ButtonPoint from "../UI/ButtonPoint";
import { COLORS } from "../../utils/Color";
import { buttonsRecurve, buttonsCompound } from "./PointsContainerHelper";
const PointsContainer = ({ onPress }) => {
  const route = useRoute();
  const { bowStyle } = route.params;
  const buttons = bowStyle == "recurve" ? buttonsRecurve : buttonsCompound;

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

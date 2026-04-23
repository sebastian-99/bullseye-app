import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SetsListContainer from "../components/Target/SetsListContainer";
import { COLORS } from "../utils/Color";
const TargetPageScore = ({ route }) => {
  const series = route.params.series;
  return (
    <GestureHandlerRootView style={styles.containerRoot}>
      <SetsListContainer setsData={series} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  containerRoot: {
    backgroundColor: COLORS.backgroundGrey,
    flex: 1,
    paddingBottom: 20,
  },
});

export default TargetPageScore;

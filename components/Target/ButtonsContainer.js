import { View, StyleSheet, useWindowDimensions } from "react-native";
import Button from "../UI/Button";
import ButtonIcon from "../UI/ButtonIcon";
import COLOR from "../../utils/Color";
import BREAKPOINTS from "../../utils/Breakpoints";
/**
 * @param {function} missedHit - Parametro que recibe para ejecutar función de flecha fallida.
 * @param {function} resetGame - Parametro que recibe para ejecutar función de reiniciar juego.
 * @param {function} undoHit - Parametro que recibe para ejecutar función de deshacer último tiro.
 * @param {number} arrows - Parametro que recibe el número de flechas lanzadas.
 */

const ContainerButton = ({ missedHit, resetGame, undoHit, arrows }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      {(BREAKPOINTS.isSmallDevice({ width: width }) ||
        BREAKPOINTS.isSmallestDevice({ width: width })) && (
        <View style={styles.containerRollback}>
          <ButtonIcon
            icon="undo"
            color={COLOR.primaryBlue}
            onPress={undoHit}
            disabled={arrows == 0}
          />
        </View>
      )}
      <View style={styles.containerButton}>
        <Button title="Fallida" color="orange" onPress={missedHit} />
        {(BREAKPOINTS.isLargeDevice({ width: width }) ||
          BREAKPOINTS.isMediumDevice({ width: width })) && (
          <ButtonIcon
            icon="undo"
            color={COLOR.primaryBlue}
            onPress={undoHit}
            disabled={arrows == 0}
          />
        )}
        <Button title="Reiniciar" color="red" onPress={resetGame} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerRollback: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
});

export default ContainerButton;

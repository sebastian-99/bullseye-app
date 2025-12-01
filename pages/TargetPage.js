import { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Alert, Vibration } from "react-native";
import Button from "../components/UI/Button";
import ButtonIcon from "../components/UI/ButtonIcon";
import IconHeader from "../components/UI/IconHeader";
import Target from "../components/Target";
import PointsContainer from "../components/Target/PointsContainer";
import SetsListContainer from "../components/Target/SetsListContainer";
import ScoreCard from "../components/UI/ScoreCard";
import { infoToast } from "../components/Notifications/Toast";
import Color from "../utils/Color";
const TargetPage = ({ navigation }) => {
  const [points, setPoints] = useState({
    points: 0,
    arrows: 0,
    history: [],
  });
  const [series, setSeries] = useState({
    set: 1,
    series: [],
  });
  const [pointIsPressed, setPointIsPressed] = useState(null);
  const [toggleView, setToggleView] = useState(false);
  //Función para añadir puntos y flecha
  const targetHit = (hitted) => {
    setPoints((prev) => {
      const newPoints = prev.points + hitted;
      const newArrows = prev.arrows + 1;
      const setNumber = prev.history.length + 1;
      return {
        ...prev,
        points: newPoints,
        arrows: newArrows,
        history: [
          ...prev.history,
          {
            arrow: setNumber,
            point: hitted,
          },
        ],
      };
    });
    setPointIsPressed(hitted);
    Vibration.vibrate(50);
  };
  //Función para reiniciar Set
  const resetGame = () => {
    setPoints({
      points: 0,
      arrows: 0,
      history: [],
    });
    setPointIsPressed(null);
  };
  //Función para añadir flecha en caso de que se no se haya dado a la diana
  const missedHit = () => {
    setPoints((prev) => {
      const setNumber = prev.history.length + 1;
      return {
        ...prev,
        arrows: prev.arrows + 1,
        history: [
          ...prev.history,
          {
            arrow: setNumber,
            point: 0,
          },
        ],
      };
    });
    setPointIsPressed(null);
    Vibration.vibrate(50);
  };
  //Función para eliminar último registro de puntos
  const undoHit = () => {
    if (points.history.length != 0) {
      setPoints((prev) => {
        const lasthistory = prev.history.at(-1);
        const lastPoint = lasthistory.point;
        const removeLasthistory = prev.history.slice(0, -1);
        return {
          ...prev,
          points: prev.points - lastPoint,
          arrows: prev.arrows - 1,
          history: removeLasthistory,
        };
      });
      setPointIsPressed(null);
    }
  };

  const changeSet = () => {
    if (points.history.length != 0) {
      const currentHistory = points.history;
      const totalPoints = points.points;
      const totalArrows = points.arrows;
      setSeries((prev) => {
        const curretnSet = prev.set;
        const newSet = prev.set + 1;
        return {
          ...prev,
          set: newSet,
          series: [
            ...prev.series,
            {
              set: curretnSet,
              points: currentHistory,
              totalPoints: totalPoints,
              totalArrows: totalArrows,
            },
          ],
        };
      });
      resetGame();
      infoToast({
        title: "Set añadido",
        message: "El set se añadio correctamente a la lista.",
      });
    } else {
      Alert.alert(
        "¡Sin puntaje!",
        "Tienes que haber tirado al menos una vez para cambiar de set."
      );
    }
  };

  const toggleViewHelper = () => {
    setToggleView((toggle) => !toggle);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `SET: ${series.set}`,
      headerRight: () => (
        <View style={styles.containerHeader}>
          {!toggleView ? (
            <>
              <IconHeader
                icon="list"
                iconColor="#ffb162ff"
                size={25}
                onPress={toggleViewHelper}
              />
              <IconHeader
                icon="plus"
                iconColor="#ffb162ff"
                size={25}
                onPress={changeSet}
                iconType="Material"
              />
            </>
          ) : (
            <IconHeader
              icon="bullseye-arrow"
              iconColor="#ffb162ff"
              size={25}
              onPress={toggleViewHelper}
              iconType="Material"
            />
          )}
        </View>
      ),
    });
  }, [series, points, toggleView]);

  return (
    <View style={styles.containerRoot}>
      <View style={styles.containerCol}>
        {!toggleView ? (
          <>
            <View style={styles.containerScore}>
              <ScoreCard points={points.points} arrows={points.arrows} />
            </View>
            <View style={styles.containerTarget}>
              <Target pressedPoint={pointIsPressed} />
            </View>
            <PointsContainer onPress={targetHit} />
            <View style={styles.containerRollback}>
              <ButtonIcon
                icon="undo"
                color={Color.primaryBlue}
                onPress={undoHit}
                disabled={points.arrows == 0 ? true : false}
              />
            </View>
            <View style={styles.containerButton}>
              <Button title="Fallida" color="orange" onPress={missedHit} />
              <Button title="Reiniciar" color="red" onPress={resetGame} />
            </View>
          </>
        ) : (
          <SetsListContainer setsData={series.series} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRoot: {
    backgroundColor: "#615f5fff",
    flex: 1,
  },
  containerHeader: {
    flexDirection: "row",
  },
  containerCol: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  containerScore: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  containerCard: {
    width: 200,
    height: 100,
    borderRadius: 10,
    backgroundColor: Color.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTarget: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    flexDirection: "row",
    marginVertical: 10,
  },
  containerRollback: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
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

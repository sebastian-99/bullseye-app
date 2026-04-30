import { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Vibration,
  Alert,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import BREAKPOINTS from "../utils/Breakpoints";
import { useFonts } from "expo-font";
import IconHeader from "../components/UI/IconHeader";
const ManualCounter = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const { width } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    counterFont: require("../assets/font/Orbitron-font.ttf"),
  });
  const handlerPress = () => {
    Vibration.vibrate(50);
    if (count == 9999) {
      Alert.alert(
        "¡Impresionante!",
        "¡Has alcanzado el conteo máximo de 9999!",
        [
          {
            text: "Cancelar",
            style: "destructive",
          },
          {
            text: "Reiniciar",
            style: "cancel",
            onPress: () => resetCounter(),
          },
        ],
      );
      return;
    }
    setCount((prev) => prev + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const undoCounter = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const containerCounterWidthHelper = () => {
    //Función para determinar tamaño del container del contador para pantalla grande
    if (BREAKPOINTS.isLargeDevice({ width: width })) {
      return 550;
    }
    //Función para determinar tamaño del container del contador para pantalla mediana
    if (BREAKPOINTS.isMediumDevice({ width: width })) {
      return 500;
    }
    //Función para determinar tamaño del container del contador para pantalla chica
    if (BREAKPOINTS.isSmallDevice({ width: width })) {
      return 350;
    }
    //Función para determinar tamaño del container del contador para pantalla más chica
    if (BREAKPOINTS.isSmallestDevice({ width: width })) {
      return 330;
    }
    return 350;
  };

  const counterTextFontSizeHelper = () => {
    //Función para determinar tamaño del container del contador para pantalla grande
    if (BREAKPOINTS.isLargeDevice({ width: width })) {
      return 100;
    }
    //Función para determinar tamaño del container del contador para pantalla mediana
    if (BREAKPOINTS.isMediumDevice({ width: width })) {
      return 90;
    }
    //Función para determinar tamaño del container del contador para pantalla chica
    if (BREAKPOINTS.isSmallDevice({ width: width })) {
      return 85;
    }
    //Función para determinar tamaño del container del contador para pantalla más chica
    if (BREAKPOINTS.isSmallestDevice({ width: width })) {
      return 80;
    }
    return 80;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerContainer}>
          <IconHeader
            icon="repeat"
            iconColor="#ffb162ff"
            size={35}
            iconType="Material"
            onPress={resetCounter}
          />
          <IconHeader
            icon="undo"
            iconColor="#ffb162ff"
            size={30}
            onPress={undoCounter}
          />
        </View>
      ),
    });
  }, [count]);

  useEffect(() => {
    //Evento que detecta cuando se hace un pop a la ruta actual para controlar cuando se un contero
    const unsubscribe = navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
      if (count > 0) {
        Alert.alert(
          "¡Tienes un conteo en proceso!",
          `¿Quieres continuar? El conteo se perdera`,
          [
            {
              text: "Cancelar",
              style: "destructive",
            },
            {
              text: "Continuar",
              style: "cancel",
              onPress: () => navigation.dispatch(event.data.action),
            },
          ],
        );
      } else {
        navigation.dispatch(event.data.action);
      }
    });
    return unsubscribe;
  }, [count, navigation]);

  return (
    <Pressable style={styles.rootContainer} onPress={handlerPress}>
      <View style={styles.innerContainerWarning}>
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>
            Preciona cualquier parte de la pantalla para aumentar el contador
          </Text>
        </View>
      </View>
      <View style={styles.innerContainerCounter}>
        <View
          style={[
            styles.counterContainer,
            { width: containerCounterWidthHelper() },
          ]}
        >
          <Text
            style={[
              styles.counterText,
              { fontSize: counterTextFontSizeHelper() },
            ]}
          >
            {count}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    height: 200,
    backgroundColor: "#000000",
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    color: "white",
    fontFamily: "counterFont",
  },
  warningContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  warningText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerContainerWarning: {
    flex: 0.4,
  },
  innerContainerCounter: {
    flex: 0.6,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ManualCounter;

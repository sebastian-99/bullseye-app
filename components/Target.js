import { View } from "react-native";
import Svg, { Circle, Text } from "react-native-svg";
const Target = ({ onPress }) => {
  const TARGET_SIZE = 800;
  const center = TARGET_SIZE / 2;
  const rings = [
    // El círculo más grande (exterior) debe ir primero
    {
      r: 225,
      fill: "white",
      points: 1,
      textOffset: 213,
      textColor: "black",
      borderColor: "black",
    }, // Anillo blanco exterior
    {
      r: 200,
      fill: "white",
      points: 2,
      textOffset: 187,
      textColor: "black",
      borderColor: "black",
    }, // Anillo blanco exterior
    {
      r: 175,
      fill: "black",
      points: 3,
      textOffset: 162,
      textColor: "white",
      borderColor: "black",
    }, // Anillo negro exterior
    {
      r: 150,
      fill: "black",
      points: 4,
      textOffset: 137,
      textColor: "white",
      borderColor: "white",
    }, // Anillo negro exterior
    {
      r: 125,
      fill: "#86CBEA",
      points: 5,
      textOffset: 112,
      textColor: "black",
      borderColor: "black",
    }, // Anillo azul en medio
    {
      r: 100,
      fill: "#86CBEA",
      points: 6,
      textOffset: 87,
      textColor: "black",
      borderColor: "black",
    }, // Anillo azul en medio
    {
      r: 75,
      fill: "red",
      points: 7,
      textOffset: 62,
      textColor: "black",
      borderColor: "black",
    }, // Anillo rojo interior
    {
      r: 50,
      fill: "red",
      points: 8,
      textOffset: 40,
      textColor: "black",
      borderColor: "black",
    }, // Anillo rojo interior
    {
      r: 30,
      fill: "yellow",
      points: 9,
      textOffset: 22,
      textColor: "black",
      borderColor: "black",
    }, // Anillo amarillo interior
    {
      r: 15,
      fill: "yellow",
      points: 10,
      textOffset: 0,
      textColor: "black",
      borderColor: "black",
    }, // Anillo amarillo interior
  ];
  return (
    <View>
      <Svg
        height={TARGET_SIZE}
        width={TARGET_SIZE}
        viewBox={`0 0 ${TARGET_SIZE} ${TARGET_SIZE}`}
      >
        {rings.map((ring, index) => (
          <Circle
            key={`circle-${index}`}
            cx={center} // Mismo centro para todos
            cy={center} // Mismo centro para todos
            r={ring.r}
            fill={ring.fill}
            stroke={ring.borderColor} // Borde opcional
            strokeWidth="2"
            onPressIn={() => onPress(ring.points)}
            //onPress={() => onPress(ring.points)}
          />
        ))}
        {rings.map((ring, index) => (
          <Text
            key={`text-${index}`}
            x={center + ring.textOffset} // Posiciona el texto a la derecha del centro
            y={center} // A la altura del centro
            fontSize="15"
            fontWeight="bold"
            fill={ring.textColor}
            textAnchor="middle" // Centra el texto en el punto (x, y)
            alignmentBaseline="middle" // Alineación vertical
          >
            {ring.points == 10 ? "+" : ring.points}
          </Text>
        ))}
      </Svg>
    </View>
  );
};
export default Target;

import { View } from "react-native";
import Svg, { Circle, Text } from "react-native-svg";
import Color from "../utils/Color";
const Target = ({ pressedPoint }) => {
  const TARGET_SIZE = 800;
  const center = TARGET_SIZE / 2;
  const rings = [
    // El círculo más grande (exterior) debe ir primero
    {
      r: 200,
      fill: "white",
      points: 1,
      textOffset: 190,
      textColor: "black",
      borderColor: "black",
    }, // Anillo blanco exterior
    {
      r: 180,
      fill: "white",
      points: 2,
      textOffset: 170,
      textColor: "black",
      borderColor: "black",
    }, // Anillo blanco exterior
    {
      r: 160,
      fill: "black",
      points: 3,
      textOffset: 150,
      textColor: "white",
      borderColor: "black",
    }, // Anillo negro exterior
    {
      r: 140,
      fill: "black",
      points: 4,
      textOffset: 130,
      textColor: "white",
      borderColor: "white",
    }, // Anillo negro exterior
    {
      r: 120,
      fill: Color.primaryBlue,
      points: 5,
      textOffset: 110,
      textColor: "black",
      borderColor: "black",
    }, // Anillo azul en medio
    {
      r: 100,
      fill: Color.primaryBlue,
      points: 6,
      textOffset: 90,
      textColor: "black",
      borderColor: "black",
    }, // Anillo azul en medio
    {
      r: 80,
      fill: "red",
      points: 7,
      textOffset: 70,
      textColor: "black",
      borderColor: "black",
    }, // Anillo rojo interior
    {
      r: 60,
      fill: "red",
      points: 8,
      textOffset: 50,
      textColor: "black",
      borderColor: "black",
    }, // Anillo rojo interior
    {
      r: 40,
      fill: "yellow",
      points: 9,
      textOffset: 30,
      textColor: "black",
      borderColor: "black",
    }, // Anillo amarillo interior
    {
      r: 20,
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
            fill={pressedPoint == ring.points ? "green" : ring.fill}
            stroke={ring.borderColor} // Borde opcional
            strokeWidth="2"
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

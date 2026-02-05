import { View, useWindowDimensions } from "react-native";
import Svg, { Circle, Text } from "react-native-svg";
import { targetResolution } from "./TargetHelper";
const Target = ({ pressedPoint }) => {
  const { width } = useWindowDimensions();
  const TARGET_SIZE = 800;
  const center = TARGET_SIZE / 2;
  const rings = targetResolution(width);
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

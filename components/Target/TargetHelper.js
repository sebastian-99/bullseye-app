import Color from "../../utils/Color";
import BREAKPOINTS from "../../utils/Breakpoints";
export const targetResolution = (width) => {
  const deviceWidth = width;
  const ring = [
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

  if (BREAKPOINTS.isLargeDevice({ width: deviceWidth })) {
    // Tablet o pantallas grandes
    const newRing = ring.map((ringelement) => {
      return {
        ...ringelement,
        r: ringelement.r * 1.5,
        textOffset: ringelement.textOffset * 1.5,
      };
    });
    return newRing;
  } else if (BREAKPOINTS.isMediumDevice({ width: deviceWidth })) {
    // Tablet pequeña o pantallas intermedia horizintal
    const newRing = ring.map((ringelement) => {
      return {
        ...ringelement,
        r: ringelement.r * 0.8,
        textOffset: ringelement.textOffset * 0.8,
      };
    });
    return newRing;
  } else if (BREAKPOINTS.isSmallDevice({ width: deviceWidth })) {
    //Teléfono estandar vertical
    return ring;
  } else {
    //Teléfono o pantalla chica
    const newRing = ring.map((ringelement) => {
      return {
        ...ringelement,
        r: ringelement.r * 0.8,
        textOffset: ringelement.textOffset * 0.8,
      };
    });
    return newRing;
  }
};

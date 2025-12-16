//Breakpoints de resoluciones de dispositivos
const BREAKPOINTS = {
  lg: 768, //Resolución para tabletas grandes
  m: 600, //Resolución para tabletas medianas o celular horizontal
  s: 360, //Resolución para celulares o pantallas chicas
  isLargeDevice: ({ width }) => {
    //Función para determinar si es un dispositivo grande
    return width >= BREAKPOINTS.lg;
  },
  isMediumDevice: ({ width }) => {
    //Función para determinar si es un dispositivo mediano
    return width >= BREAKPOINTS.m && width < BREAKPOINTS.lg;
  },
  isSmallDevice: ({ width }) => {
    //Función para determinar si es un dispositivo pequeño
    return width >= BREAKPOINTS.s && width < BREAKPOINTS.m;
  },
  isSmallestDevice: ({ width }) => {
    //Función para determinar si es un dispositivo más pequeño
    return width < BREAKPOINTS.s;
  },
};

export default BREAKPOINTS;

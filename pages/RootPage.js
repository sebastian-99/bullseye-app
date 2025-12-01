import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "../components/navigation/Navigation";
const RootPage = () => {
  return (
    <SafeAreaProvider>
      {/* Componente que renderiza todas las rutas de la app */}
      <Navigation />
    </SafeAreaProvider>
  );
};

export default RootPage;

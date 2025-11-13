import { StatusBar } from "expo-status-bar";
import RootPage from "./pages/RootPage";
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* Componente que es el root de la app */}
      <RootPage />
    </>
  );
}

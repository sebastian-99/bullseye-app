import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Toast from "react-native-toast-message";
import BowStylePage from "../../pages/BowStylePage";
import TargetPage from "../../pages/TargetPage";
import TargetPageScore from "../../pages/TargetPageScore";
import ManualCounter from "../../pages/ManualCounter";
import IconSlideModal from "../UI/IconSlideModal";
import { COLORS } from "../../utils/Color";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.primaryBlue,
            },
            cardStyle: { backgroundColor: COLORS.backgroundGrey },
          }}
        >
          <Stack.Screen
            name="BowStyle"
            component={BowStylePage}
            options={{
              title: "Outdoor",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "black",
                fontSize: 25,
              },
            }}
          />
          <Stack.Screen
            name="Target"
            component={TargetPage}
            options={{
              title: " ",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="TargetScore"
            component={TargetPageScore}
            options={{
              headerStyle: {
                backgroundColor: "white",
              },
              headerLeft: () => null,
              headerTitle: () => <IconSlideModal />,
              headerTitleAlign: "center",
              presentation: "modal",
              gestureEnabled: true,
              ...TransitionPresets.ModalTransition,
            }}
          />
          <Stack.Screen
            name="manualCounter"
            component={ManualCounter}
            options={{
              title: " ",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default Navigation;

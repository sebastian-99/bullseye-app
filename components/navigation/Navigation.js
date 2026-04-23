import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Toast from "react-native-toast-message";
import BowStylePage from "../../pages/BowStylePage";
import TargetPage from "../../pages/TargetPage";
import TargetPageScore from "../../pages/TargetPageScore";
import IconSlideModal from "../UI/IconSlideModal";
import { COLORS } from "../../utils/Color";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
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
              headerStyle: {
                backgroundColor: COLORS.primaryBlue,
              },
            }}
          />
          <Stack.Screen
            name="Target"
            component={TargetPage}
            options={{
              title: " ",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: COLORS.primaryBlue,
              },
            }}
          />
          <Stack.Screen
            name="TargetScore"
            component={TargetPageScore}
            options={{
              headerLeft: () => null,
              headerTitle: () => <IconSlideModal />,
              headerTitleAlign: "center",
              presentation: "modal",
              gestureEnabled: true,
              ...TransitionPresets.ModalPresentationIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default Navigation;

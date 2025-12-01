import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-toast-message";
import TargetPage from "../../pages/TargetPage";
import Color from "../../utils/Color";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Target"
            component={TargetPage}
            options={{
              title: " ",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Color.primaryBlue,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default Navigation;

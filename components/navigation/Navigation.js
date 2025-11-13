import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TargetPage from "../../pages/TargetPage";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Target"
          component={TargetPage}
          options={{
            title: "Diana Objetivo",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#86CBEA",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  // const [loaded] = useFonts({
  //   InterBold: require("./assets/fonts/Inter-Bold.tff"),
  //   InterSemiBold: require("./assets/fonts/Inter-SemiBold.tff"),
  //   InterMedium: require("./assets/fonts/Inter-Medium.tff"),
  //   InterRegular: require("./assets/fonts/Inter-Regular.tff"),
  //   InterLight: require("./assets/fonts/Inter-Light.tff"),
  // });

  // if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

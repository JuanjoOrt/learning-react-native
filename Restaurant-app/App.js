import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/Home";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);

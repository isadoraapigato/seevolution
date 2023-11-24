import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from '../pages/intro'
import Welcome from '../pages/welcome'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import Validar from '../pages/validar'
import Evolution from '../pages/evolution'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Welcome" 
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Evolution"
        component={Evolution}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Validar"
        component={Validar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false}}
      />

    {/*  { <Tab.Navigator>
        <Tab.Screen name="Home" component={Welcome} />
      </Tab.Navigator> } */}

    </Stack.Navigator>
  )
}
import React, {useState} from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import Add from './screens/Add';
const AppStack = () => {
    Tab = createBottomTabNavigator();
    const [items, setItems] = useState([]); 
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Add') {
                            iconName = focused ? 'add' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Home" >
                    {(props) => <HomeScreen {...props} items={items} setItems={setItems} />}
                </Tab.Screen>
                <Tab.Screen name="Add" >
                    {(props) => <Add {...props} items={items} setItems={setItems} />}
                </Tab.Screen>
            </Tab.Navigator>
    
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alighItems: 'center'
    },

})
export default AppStack;
import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabsLayout() {
  return (
    <Tabs
     screenOptions={{ headerShown: false }}
      
    
    >
      <Tabs.Screen name="home"
      options={{
        tabBarIcon: ({color}) => (<FontAwesome name="home" size={24} color={color} />)
      }}
      />
      <Tabs.Screen name="profile"
      options={{
        tabBarIcon: ({color}) => (<Octicons name="person-fill" size={24} color={color} />)
      }}
      />
    </Tabs>
  );
}

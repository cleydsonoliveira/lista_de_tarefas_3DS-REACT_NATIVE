import { Tabs } from 'expo-router';
import { House, User } from 'lucide-react-native';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' 
      options={{
        headerShown: false,
        tabBarStyle: {display : 'none'},
        href: null
      }}
      />
      <Tabs.Screen name='tela2' 
      options={{
        tabBarIcon: () => <House />
      }}
      />
      <Tabs.Screen name='teste' 
      options={{
        tabBarIcon: () => <User />
      }}
      />

    </Tabs>
  );
}
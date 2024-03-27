import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import colors from '~/constants/colors';
import { cn } from '~/lib/utils/utils';

function TabBarIcon({
  color,
  focused,
  name,
  label,
}: {
  color: string;
  focused: boolean;
  name: any;
  label: string;
}) {
  return (
    <View
      className={cn(
        'flex flex-row items-center gap-x-3 transition-all',
        focused ? 'bg-input p-3 rounded-full' : ''
      )}>
      <MaterialIcons name={name} size={28} color={color} />
      {focused && <Text className={cn(color, 'text-active font-semibold')}>{label}</Text>}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.bg,
          height: 60,
          borderTopColor: colors.bg,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="home" label="Home" />
          ),
        }}
      />
    </Tabs>
  );
}

import '../global.css';

import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar, View } from 'react-native';
import colors from '~/constants/colors';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={colors.bg} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/search/[search]" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" />
        <Stack.Screen name="genres/[id]" />
      </Stack>
    </QueryClientProvider>
  );
}

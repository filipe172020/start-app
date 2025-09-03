import React from 'react';
import { View } from 'react-native';

// components
import TabBar from '@/components/ui/TabBar';
import HomeScreen from '.';

export default function TabLayout() {

  return (
    <View style={{ flex: 1, flexDirection: 'column', position: 'relative' }}>
      <HomeScreen />
      <TabBar />
    </View>

  );
}

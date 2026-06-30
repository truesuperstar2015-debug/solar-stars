import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Hero Card */}
      <View className="bg-brand-navy mx-4 mt-4 rounded-2xl p-6">
        <Text className="text-white text-2xl font-bold mb-2">Welcome to Solar Stars</Text>
        <Text className="text-gray-300 text-sm mb-4">
          Your solar energy dashboard. Track production, savings, and manage your system.
        </Text>
        <TouchableOpacity className="bg-brand-gold rounded-lg py-3 px-4">
          <Text className="text-white text-center font-semibold">View Dashboard</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Stats */}
      <View className="flex-row mx-4 mt-4 gap-3">
        <View className="flex-1 bg-white rounded-xl p-4">
          <Text className="text-2xl mb-1">⚡</Text>
          <Text className="text-xl font-bold text-brand-navy">28.4 kWh</Text>
          <Text className="text-xs text-gray-500">Today</Text>
        </View>
        <View className="flex-1 bg-white rounded-xl p-4">
          <Text className="text-2xl mb-1">💰</Text>
          <Text className="text-xl font-bold text-brand-navy">$142</Text>
          <Text className="text-xs text-gray-500">Monthly Savings</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View className="mx-4 mt-4 bg-white rounded-xl p-4">
        <Text className="font-semibold text-brand-navy mb-3">Quick Actions</Text>
        <TouchableOpacity
          className="flex-row items-center py-3 border-b border-gray-100"
          onPress={() => Linking.openURL('tel:8454441915')}
        >
          <Text className="text-lg mr-3">📞</Text>
          <View className="flex-1">
            <Text className="font-medium text-sm">Call Support</Text>
            <Text className="text-xs text-gray-500">(845) 444-1915</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center py-3 border-b border-gray-100"
          onPress={() => Linking.openURL('mailto:tolin@solarstars.net')}
        >
          <Text className="text-lg mr-3">✉️</Text>
          <View className="flex-1">
            <Text className="font-medium text-sm">Email Us</Text>
            <Text className="text-xs text-gray-500">tolin@solarstars.net</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-3">
          <Text className="text-lg mr-3">🤝</Text>
          <View className="flex-1">
            <Text className="font-medium text-sm">Refer a Friend</Text>
            <Text className="text-xs text-gray-500">Earn $500 per referral</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

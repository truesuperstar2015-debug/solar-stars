import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <View className="bg-white rounded-2xl p-6 mb-4 items-center">
        <View className="w-20 h-20 bg-brand-navy rounded-full items-center justify-center mb-3">
          <Text className="text-3xl">👤</Text>
        </View>
        <Text className="text-lg font-bold text-brand-navy">John Doe</Text>
        <Text className="text-sm text-gray-500">Customer since 2025</Text>
      </View>

      <View className="bg-white rounded-2xl p-4 mb-4">
        <Text className="font-semibold text-brand-navy mb-3">Account</Text>
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
          <Text className="flex-1 text-sm">Edit Profile</Text>
          <Text className="text-gray-400">→</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
          <Text className="flex-1 text-sm">Notifications</Text>
          <Text className="text-gray-400">→</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
          <Text className="flex-1 text-sm">Documents</Text>
          <Text className="text-gray-400">→</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-3">
          <Text className="flex-1 text-sm">Billing</Text>
          <Text className="text-gray-400">→</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-white rounded-2xl p-4 mb-4">
        <Text className="font-semibold text-brand-navy mb-3">Support</Text>
        <TouchableOpacity
          className="flex-row items-center py-3 border-b border-gray-100"
          onPress={() => Linking.openURL('tel:8454441915')}
        >
          <Text className="flex-1 text-sm">Call (845) 444-1915</Text>
          <Text className="text-gray-400">📞</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center py-3"
          onPress={() => Linking.openURL('mailto:tolin@solarstars.net')}
        >
          <Text className="flex-1 text-sm">Email tolin@solarstars.net</Text>
          <Text className="text-gray-400">✉️</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-red-50 rounded-xl py-3">
        <Text className="text-red-500 text-center font-medium text-sm">Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

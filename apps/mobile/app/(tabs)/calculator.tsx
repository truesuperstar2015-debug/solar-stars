import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function CalculatorScreen() {
  const [monthlyBill, setMonthlyBill] = useState(150);

  const savings = Math.round(monthlyBill * 0.7);
  const annualSavings = savings * 12;

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <View className="bg-white rounded-2xl p-6 mb-4">
        <Text className="text-xl font-bold text-brand-navy mb-2">Solar Savings Calculator</Text>
        <Text className="text-sm text-gray-600 mb-6">
          See how much you could save by switching to solar energy.
        </Text>

        <Text className="text-sm font-medium text-gray-700 mb-2">
          Monthly Electric Bill: ${monthlyBill}
        </Text>
        <View className="h-2 bg-gray-200 rounded-full mb-6">
          <View className="h-2 bg-brand-gold rounded-full" style={{ width: `${(monthlyBill / 500) * 100}%` }} />
        </View>

        <View className="flex-row gap-3 mb-4">
          {[100, 150, 200, 300].map((val) => (
            <TouchableOpacity
              key={val}
              onPress={() => setMonthlyBill(val)}
              className={`flex-1 py-2 rounded-lg ${monthlyBill === val ? 'bg-brand-navy' : 'bg-gray-100'}`}
            >
              <Text className={`text-center text-xs font-medium ${monthlyBill === val ? 'text-white' : 'text-gray-600'}`}>
                ${val}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Results */}
      <View className="bg-brand-navy rounded-2xl p-6">
        <Text className="text-white text-lg font-semibold mb-4">Your Estimated Savings</Text>
        <View className="flex-row gap-3">
          <View className="flex-1 bg-white/10 rounded-xl p-4">
            <Text className="text-brand-gold text-xl font-bold">${savings}/mo</Text>
            <Text className="text-gray-300 text-xs">Monthly</Text>
          </View>
          <View className="flex-1 bg-white/10 rounded-xl p-4">
            <Text className="text-green-400 text-xl font-bold">${annualSavings.toLocaleString()}/yr</Text>
            <Text className="text-gray-300 text-xs">Annual</Text>
          </View>
        </View>
        <TouchableOpacity className="bg-brand-gold rounded-lg py-3 mt-4">
          <Text className="text-white text-center font-semibold">Get Your Exact Quote</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

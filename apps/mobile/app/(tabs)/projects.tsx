import { View, Text, ScrollView } from 'react-native';

const milestones = [
  { title: 'Contract Signed', status: 'completed', date: 'Jan 10, 2025' },
  { title: 'Site Survey', status: 'completed', date: 'Jan 18, 2025' },
  { title: 'System Design', status: 'completed', date: 'Feb 2, 2025' },
  { title: 'Permits Approved', status: 'completed', date: 'Feb 20, 2025' },
  { title: 'Installation', status: 'completed', date: 'Mar 12-15, 2025' },
  { title: 'Inspection Passed', status: 'completed', date: 'Mar 22, 2025' },
  { title: 'PTO Granted', status: 'completed', date: 'Apr 1, 2025' },
  { title: 'System Active', status: 'completed', date: 'Apr 1, 2025' },
];

export default function ProjectsScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold text-brand-navy mb-2">Project Tracker</Text>
      <Text className="text-sm text-gray-600 mb-6">Follow your installation progress.</Text>

      <View className="bg-white rounded-2xl p-6">
        {milestones.map((milestone, index) => (
          <View key={milestone.title} className="flex-row mb-4 last:mb-0">
            <View className="items-center mr-4">
              <View className={`w-4 h-4 rounded-full ${
                milestone.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
              }`} />
              {index < milestones.length - 1 && (
                <View className={`w-0.5 flex-1 mt-1 ${
                  milestone.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                }`} />
              )}
            </View>
            <View className="flex-1 pb-4">
              <Text className="font-medium text-sm text-brand-navy">{milestone.title}</Text>
              <Text className="text-xs text-gray-500 mt-0.5">{milestone.date}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

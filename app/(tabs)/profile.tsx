
import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { colors } from "@/styles/commonStyles";

export default function ProfileScreen() {
  const upcomingAppointments = [
    {
      id: '1',
      service: 'Classic Haircut',
      barber: 'Mike Johnson',
      date: 'Dec 28, 2024',
      time: '2:00 PM',
      address: '123 Main St, Apt 4B',
      status: 'confirmed',
    },
    {
      id: '2',
      service: 'Beard Trim',
      barber: 'David Smith',
      date: 'Jan 5, 2025',
      time: '10:30 AM',
      address: '123 Main St, Apt 4B',
      status: 'confirmed',
    },
  ];

  const appointmentHistory = [
    {
      id: '3',
      service: 'Full Service',
      barber: 'James Brown',
      date: 'Dec 15, 2024',
      time: '3:00 PM',
      status: 'completed',
    },
    {
      id: '4',
      service: 'Hot Shave',
      barber: 'Mike Johnson',
      date: 'Dec 1, 2024',
      time: '11:00 AM',
      status: 'completed',
    },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <IconSymbol name="person.circle.fill" size={80} color={colors.primary} />
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <IconSymbol name="phone.fill" size={20} color={colors.primary} />
              <Text style={styles.infoText}>+1 (555) 123-4567</Text>
            </View>
            <View style={styles.infoRow}>
              <IconSymbol name="location.fill" size={20} color={colors.primary} />
              <Text style={styles.infoText}>123 Main St, Apt 4B, San Francisco, CA</Text>
            </View>
          </View>
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {upcomingAppointments.map((appointment) => (
            <View key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentHeader}>
                <Text style={styles.appointmentService}>{appointment.service}</Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>Confirmed</Text>
                </View>
              </View>
              <View style={styles.appointmentDetail}>
                <IconSymbol name="person.fill" size={16} color={colors.textSecondary} />
                <Text style={styles.appointmentDetailText}>{appointment.barber}</Text>
              </View>
              <View style={styles.appointmentDetail}>
                <IconSymbol name="calendar" size={16} color={colors.textSecondary} />
                <Text style={styles.appointmentDetailText}>{appointment.date} at {appointment.time}</Text>
              </View>
              <View style={styles.appointmentDetail}>
                <IconSymbol name="location.fill" size={16} color={colors.textSecondary} />
                <Text style={styles.appointmentDetailText}>{appointment.address}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Appointment History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appointment History</Text>
          {appointmentHistory.map((appointment) => (
            <View key={appointment.id} style={styles.historyCard}>
              <View style={styles.historyIcon}>
                <IconSymbol name="checkmark" size={20} color={colors.card} />
              </View>
              <View style={styles.historyContent}>
                <Text style={styles.historyService}>{appointment.service}</Text>
                <Text style={styles.historyDetails}>
                  {appointment.barber} • {appointment.date}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <Pressable style={styles.preferenceItem}>
            <IconSymbol name="bell.fill" size={20} color={colors.primary} />
            <Text style={styles.preferenceText}>Notifications</Text>
            <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
          </Pressable>
          <Pressable style={styles.preferenceItem}>
            <IconSymbol name="creditcard.fill" size={20} color={colors.primary} />
            <Text style={styles.preferenceText}>Payment Methods</Text>
            <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
          </Pressable>
          <Pressable style={styles.preferenceItem}>
            <IconSymbol name="star.fill" size={20} color={colors.primary} />
            <Text style={styles.preferenceText}>Favorite Barbers</Text>
            <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  appointmentCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentService: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  statusBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.card,
  },
  appointmentDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  appointmentDetailText: {
    fontSize: 14,
    color: colors.textSecondary,
    flex: 1,
  },
  historyCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  historyIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  historyContent: {
    flex: 1,
  },
  historyService: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  historyDetails: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  preferenceItem: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  preferenceText: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
});


import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Platform, Alert } from "react-native";
import { Stack, router } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors } from "@/styles/commonStyles";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BookingScreen() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedBarber, setSelectedBarber] = useState<string>('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const services = [
    { id: '1', name: 'Classic Haircut', price: '$35' },
    { id: '2', name: 'Beard Trim', price: '$20' },
    { id: '3', name: 'Hot Shave', price: '$30' },
    { id: '4', name: 'Full Service', price: '$75' },
  ];

  const barbers = [
    { id: '1', name: 'Mike Johnson', specialty: 'Classic Cuts' },
    { id: '2', name: 'David Smith', specialty: 'Modern Styles' },
    { id: '3', name: 'James Brown', specialty: 'Beard Expert' },
  ];

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const newDate = new Date(date);
      newDate.setHours(selectedTime.getHours());
      newDate.setMinutes(selectedTime.getMinutes());
      setDate(newDate);
    }
  };

  const handleBooking = () => {
    if (!selectedService || !selectedBarber || !address || !name || !phone) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    Alert.alert(
      'Booking Confirmed!',
      `Your appointment has been scheduled for ${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.`,
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Book Appointment",
          headerBackTitle: "Back",
          headerTintColor: colors.primary,
        }}
      />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Personal Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name *"
              placeholderTextColor={colors.textSecondary}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number *"
              placeholderTextColor={colors.textSecondary}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Address *"
              placeholderTextColor={colors.textSecondary}
              value={address}
              onChangeText={setAddress}
              multiline
              numberOfLines={2}
            />
          </View>

          {/* Service Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select Service</Text>
            {services.map((service) => (
              <Pressable
                key={service.id}
                onPress={() => setSelectedService(service.id)}
                style={[
                  styles.optionCard,
                  selectedService === service.id && styles.optionCardSelected
                ]}
              >
                <View style={styles.optionContent}>
                  <Text style={[
                    styles.optionTitle,
                    selectedService === service.id && styles.optionTitleSelected
                  ]}>
                    {service.name}
                  </Text>
                  <Text style={[
                    styles.optionPrice,
                    selectedService === service.id && styles.optionPriceSelected
                  ]}>
                    {service.price}
                  </Text>
                </View>
                {selectedService === service.id && (
                  <IconSymbol name="checkmark.circle.fill" size={24} color={colors.primary} />
                )}
              </Pressable>
            ))}
          </View>

          {/* Barber Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Choose Your Barber</Text>
            {barbers.map((barber) => (
              <Pressable
                key={barber.id}
                onPress={() => setSelectedBarber(barber.id)}
                style={[
                  styles.optionCard,
                  selectedBarber === barber.id && styles.optionCardSelected
                ]}
              >
                <View style={styles.barberIcon}>
                  <IconSymbol name="person.fill" size={24} color={colors.card} />
                </View>
                <View style={styles.optionContent}>
                  <Text style={[
                    styles.optionTitle,
                    selectedBarber === barber.id && styles.optionTitleSelected
                  ]}>
                    {barber.name}
                  </Text>
                  <Text style={styles.barberSpecialty}>{barber.specialty}</Text>
                </View>
                {selectedBarber === barber.id && (
                  <IconSymbol name="checkmark.circle.fill" size={24} color={colors.primary} />
                )}
              </Pressable>
            ))}
          </View>

          {/* Date & Time Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Date & Time</Text>
            
            <Pressable
              onPress={() => setShowDatePicker(true)}
              style={styles.dateTimeButton}
            >
              <IconSymbol name="calendar" size={20} color={colors.primary} />
              <Text style={styles.dateTimeText}>{formatDate(date)}</Text>
              <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
            </Pressable>

            <Pressable
              onPress={() => setShowTimePicker(true)}
              style={styles.dateTimeButton}
            >
              <IconSymbol name="clock" size={20} color={colors.primary} />
              <Text style={styles.dateTimeText}>{formatTime(date)}</Text>
              <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
            </Pressable>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onDateChange}
                minimumDate={new Date()}
              />
            )}

            {showTimePicker && (
              <DateTimePicker
                value={date}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}
          </View>

          {/* Additional Notes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Notes (Optional)</Text>
            <TextInput
              style={[styles.input, styles.notesInput]}
              placeholder="Any special requests or preferences..."
              placeholderTextColor={colors.textSecondary}
              value={notes}
              onChangeText={setNotes}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Book Button */}
          <Pressable
            onPress={handleBooking}
            style={({ pressed }) => [
              styles.bookButton,
              pressed && styles.bookButtonPressed
            ]}
          >
            <Text style={styles.bookButtonText}>Confirm Booking</Text>
            <IconSymbol name="checkmark" size={20} color={colors.card} />
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    paddingBottom: 40,
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
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
  },
  notesInput: {
    minHeight: 100,
  },
  optionCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionCardSelected: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: `${colors.primary}10`,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  optionTitleSelected: {
    color: colors.primary,
  },
  optionPrice: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  optionPriceSelected: {
    color: colors.primary,
    fontWeight: '600',
  },
  barberIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  barberSpecialty: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  dateTimeButton: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dateTimeText: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  bookButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 10,
    boxShadow: '0px 4px 12px rgba(0, 123, 255, 0.3)',
    elevation: 4,
  },
  bookButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.card,
  },
});

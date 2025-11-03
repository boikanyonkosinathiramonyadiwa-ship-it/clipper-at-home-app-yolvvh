
import React from "react";
import { Stack, Link, router } from "expo-router";
import { ScrollView, Pressable, StyleSheet, View, Text, Platform, Image } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { colors } from "@/styles/commonStyles";

export default function HomeScreen() {
  const theme = useTheme();

  const services = [
    {
      id: '1',
      title: "Classic Adult Haircut",
      description: "Professional adult haircut at your doorstep",
      price: "R225",
      duration: "30 min",
      icon: "scissors",
      color: colors.primary,
    },
    {
      id: '2',
      title: "Classic Kids Haircut",
      description: "Gentle and fun haircut for children",
      price: "R175",
      duration: "25 min",
      icon: "face.smiling",
      color: colors.highlight,
    },
    {
      id: '3',
      title: "Black Dye Application",
      description: "Professional black hair dye application",
      price: "R105",
      duration: "45 min",
      icon: "paintbrush.fill",
      color: colors.accent,
    },
    {
      id: '4',
      title: "Colour Application",
      description: "Custom colour dye application",
      price: "R155",
      duration: "50 min",
      icon: "paintpalette.fill",
      color: colors.success,
    },
    {
      id: '5',
      title: "Line and Vynals",
      description: "Sharp lines and vinyl designs",
      price: "R35",
      duration: "15 min",
      icon: "line.3.horizontal",
      color: colors.primary,
    },
    {
      id: '6',
      title: "Dsigns",
      description: "Custom hair designs and patterns",
      price: "R55+",
      duration: "20 min",
      icon: "star.fill",
      color: colors.highlight,
    },
    {
      id: '7',
      title: "Eyebrow Twizzing",
      description: "Professional eyebrow grooming",
      price: "R45",
      duration: "15 min",
      icon: "eye.fill",
      color: colors.accent,
    },
    {
      id: '8',
      title: "Beard Dye",
      description: "Expert beard coloring service",
      price: "R65",
      duration: "30 min",
      icon: "paintbrush",
      color: colors.success,
    },
    {
      id: '9',
      title: "Beard Trim",
      description: "Expert beard grooming and styling",
      price: "R25",
      duration: "15 min",
      icon: "scissors",
      color: colors.primary,
    }
  ];

  const renderHeaderRight = () => (
    <Pressable
      onPress={() => router.push('/booking')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="calendar.badge.plus" color={colors.primary} />
    </Pressable>
  );

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Boika The Baber Mobile",
            headerRight: renderHeaderRight,
          }}
        />
      )}
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.heroIcon}>
              <IconSymbol name="scissors" size={48} color={colors.card} />
            </View>
            <Text style={styles.heroTitle}>Boika The Baber</Text>
            <Text style={styles.heroSubtitle}>Mobile Service</Text>
            <Text style={styles.heroDescription}>
              Professional grooming services delivered to your home. Book your appointment today!
            </Text>
          </View>

          {/* Services Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
          </View>

          {services.map((service) => (
            <Pressable
              key={service.id}
              onPress={() => router.push('/booking')}
              style={({ pressed }) => [
                styles.serviceCard,
                pressed && styles.serviceCardPressed
              ]}
            >
              <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                <IconSymbol name={service.icon as any} color={colors.card} size={28} />
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
                <View style={styles.serviceDetails}>
                  <View style={styles.serviceDetailItem}>
                    <IconSymbol name="clock" size={14} color={colors.textSecondary} />
                    <Text style={styles.serviceDetailText}>{service.duration}</Text>
                  </View>
                  <Text style={styles.servicePrice}>{service.price}</Text>
                </View>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
            </Pressable>
          ))}

          {/* About Section */}
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>Why Choose Us?</Text>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
              <Text style={styles.featureText}>Licensed & Experienced Barber</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
              <Text style={styles.featureText}>Professional Equipment & Products</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
              <Text style={styles.featureText}>Flexible Scheduling</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
              <Text style={styles.featureText}>100% Satisfaction Guaranteed</Text>
            </View>
          </View>

          {/* CTA Button */}
          <Pressable
            onPress={() => router.push('/booking')}
            style={({ pressed }) => [
              styles.ctaButton,
              pressed && styles.ctaButtonPressed
            ]}
          >
            <Text style={styles.ctaButtonText}>Book Appointment</Text>
            <IconSymbol name="arrow.right" size={20} color={colors.card} />
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
  },
  scrollContentWithTabBar: {
    paddingBottom: 100,
  },
  headerButtonContainer: {
    padding: 6,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 20,
  },
  heroIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 123, 255, 0.3)',
    elevation: 5,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  heroDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  serviceCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  serviceCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 18,
  },
  serviceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  serviceDetailText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  servicePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  aboutSection: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    boxShadow: '0px 4px 12px rgba(0, 123, 255, 0.3)',
    elevation: 4,
  },
  ctaButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.card,
  },
});

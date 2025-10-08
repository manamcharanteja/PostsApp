import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Card = ({ title, content }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text>{content}</Text>
  </View>
);

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Card title="Card 1" content="This is the content of card 1." />
      <Card title="Card 2" content="This is the content of card 2." />
      <Card title="Card 3" content="This is the content of card 3." />
      <Card title="Card 4" content="This is the content of card 4." />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DashboardScreen;

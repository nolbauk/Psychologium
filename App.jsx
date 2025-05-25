import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Psychologium</Text>
  </View>
);

const WelcomeMessage = () => (
  <View style={styles.section}>
    <Text style={styles.text}>Welcome back! Let's reflect on your day 💗</Text>
  </View>
);

const JournalPrompt = () => (
  <View style={styles.section}>
    <Text style={styles.prompt}>How are you feeling today?</Text>
  </View>
);

const JournalInput = ({ value, onChange }) => (
  <View style={styles.section}>
    <TextInput
      style={styles.input}
      placeholder="Write your thoughts here..."
      value={value}
      onChangeText={onChange}
      multiline
      numberOfLines={4}
      placeholderTextColor="#d48ea5"
    />
  </View>
);

const SubmitButton = ({ onPress }) => (
  <View style={styles.section}>
    <Button title="Save Journal" onPress={onPress} color="#d36ba6" />
  </View>
);

export default function App() {
  const [journalText, setJournalText] = useState('');

  const handleSave = () => {
    if (journalText.trim() === '') {
      Alert.alert('Empty Journal', 'Please write something before saving.');
    } else {
      Alert.alert('Saved!', 'Your journal entry has been saved. 📝');
      setJournalText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <WelcomeMessage />
      <JournalPrompt />
      <JournalInput value={journalText} onChange={setJournalText} />
      <SubmitButton onPress={handleSave} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff0f5',
  },
  header: {
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#c2185b',
  },
  section: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#880e4f',
  },
  prompt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ad1457',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f48fb1',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    color: '#6a1b4d',
  },
});

import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, Image, View } from 'react-native';
import { Card } from 'react-native-paper';

// Import your images from assets
import profilePic from './assets/zed.jpg';
import coverPic from './assets/snack-icon.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={coverPic} style={styles.coverImage} />

        <View style={styles.profileSection}>
          <Image source={profilePic} style={styles.profileImage} />
          <Text style={styles.name}>Sartorio, Zedrick Dhor D</Text>
        </View>

        <Card style={styles.card}>
          <Text style={styles.category}>Skills</Text>
          <Text style={styles.info}>- Python</Text>
          <Text style={styles.info}>- Networking</Text>
          <Text style={styles.info}>- HTML/CSS</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.category}>Hobbies</Text>
          <Text style={styles.info}>- Reading</Text>
          <Text style={styles.info}>- Dancing</Text>
          <Text style={styles.info}>- Cooking</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.category}>SCHOOL</Text>
          <Text style={styles.info}>- Global Reciprocal College (2024 - Present)</Text>
          <Text style={styles.info}>- Valenzuela National High School. (2019 - 2020)</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

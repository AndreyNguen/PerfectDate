import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('AboutUs')} style={styles.container1}>
        <Text style={styles.paragraph}>Команда разработчиков Perfect Date:</Text>
      </Text>
      <Text style={styles.container1}>
        <Text style={styles.paragraph}>{`Леша \n(https://github.com/AxEL-Samus)`}</Text>
      </Text>
      {/* <View style={styles.container1}>
        <Image
          style={styles.img2}
          source={{
            uri: 'https://ca.slack-edge.com/T03HY1ND24T-U04EACLKMMY-024850da83b3-512',
          }}
        />
      </View> */}
      <Text style={styles.container1}>
        <Text style={styles.paragraph}>{`Максим \n(https://github.com/Max7774)`}</Text>
      </Text>
      <Text style={styles.container1}>
        <Text style={styles.paragraph}>{`Андрей \n(https://github.com/AndreyNguen)`}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
  img2: {
    height: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

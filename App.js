import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

const PlaceholderImage = require('./assets/images/background-image.png')


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("you did not select an image")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          selected={selectedImage} 
          placeholder={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label="choose a photo" onPress={pickImageAsync}/>
        <Button label="use this photo" onPress={() => alert(selectedImage)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

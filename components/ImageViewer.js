import { StyleSheet, Image } from "react-native";

export default function ImageViewer({source}) {
  return (
    <Image source={source} style={StyleSheet.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
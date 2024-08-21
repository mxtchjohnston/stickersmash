import { StyleSheet, Image } from "react-native";

export default function ImageViewer({selected, placeholder}) {
  const source = selected ? selected : placeholder
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
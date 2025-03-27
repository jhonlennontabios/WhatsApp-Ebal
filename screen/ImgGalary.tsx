import React, { useState } from "react";
import { View,Text, Image, FlatList, StyleSheet,TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / numColumns - 10;

const ImageGallery = () => {
  const [fallbackImages, setFallbackImages] = useState({});
  const navigation = useNavigation();
  const imageList = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    uri: `https://picsum.photos/seed/${index}/150/150`, // Reliable image source
  }));

  const handleImageError = (id) => {
    setFallbackImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={24} color="gray" />
                                          
      <Text style={styles.header}>Gallery</Text>
                      </TouchableOpacity>
    
    <FlatList
      data={imageList}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          {fallbackImages[item.id] ? (
            <Image source={require("../assets/weight.png")} style={styles.image} />
          ) : (
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
              onError={() => handleImageError(item.id)}
            />
          )}
        </View>
      )}
      contentContainerStyle={styles.gallery}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  gallery: {
    padding: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  backButton: { padding: 10,flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 8,
  },
});

export default ImageGallery;

import React from "react";
import { View, Text,TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const videoThumbnails = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  uri: `https://picsum.photos/seed/video${index}/150/150`, // Placeholder thumbnail
}));

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / numColumns - 10;

const VideoGallery = () => {
    const navigation = useNavigation();
  return (
    <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" size={24} color="gray" />
                                              
          <Text style={styles.header}>Vedio</Text>
                          </TouchableOpacity>
    <FlatList
      data={videoThumbnails}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
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
  backButton: { padding: 10,flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#333",
    },
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

export default VideoGallery;

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
   const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.find((d) => d.position === "back"); // Select back camera

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!device) return <View style={styles.container} />;
  if (!hasPermission) return <Text style={styles.permissionText}>No Camera Permission</Text>;

  return (
    <View style={styles.container}>
      {/* Camera Preview */}
      <Camera style={styles.cameraPreview} device={device} isActive={true} />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Icon name="close" size={30} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Icon name="flash-auto" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        <TouchableOpacity>
          <Icon name="image" size={30} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.captureButton}>
          <Icon name="circle-outline" size={80} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera-flip" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Video/Photo Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, { color: "gray" }]}>Video</Text>
        <Text style={[styles.toggleText, { color: "white", fontWeight: "bold" }]}>Photo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    position: "absolute",
    top: 0,
    width: "100%",
  },

  cameraPreview: {
    flex: 1,
  },

  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    bottom: 100,
    width: "100%",
  },

  captureButton: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 50,
  },

  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },

  toggleText: {
    fontSize: 16,
    marginHorizontal: 20,
  },

  permissionText: {
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },
});

export default CameraScreen;

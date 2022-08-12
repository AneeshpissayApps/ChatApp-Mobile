import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { colors } from '../../assets/colors'
import metrics from '../../metrics'
import { changeNavigationBarColor } from '../NavigationBar'
import { Photo } from './Photo'
import { Video } from './Video'
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { LoadingIndicator } from '../LoadingIndicator'
import { useIsFocused } from '@react-navigation/native'
import useCamera from '../../hooks/useCamera'
import CameraFeatureController from '../CameraFeatureController'
import Slider from '@react-native-community/slider'
import { Text } from 'react-native-paper'

export const CustomCamera = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'photo', title: 'Photo' },
    { key: 'video', title: 'Video' },
  ]);
  useEffect(() => {
    changeNavigationBarColor(colors.header)
  }, []);
  const devices = useCameraDevices();
  const isFocused = useIsFocused();
  const { cameraRef, takePhoto, flash, cameraDevice, changeCameraDevice, changeFlash, startRecording, stopRecording } = useCamera();
  const device = cameraDevice === "back" ? devices.back : devices.front;
  const [zoomValue, setZoomValue] = useState(1);
  const [recording, setRecording] = useState(false);
  const photoCapture = async () => {
    let result = await takePhoto(flash);
    console.log(result);
  }
  const videoCapture = async () => {
    if(recording) {
      setRecording(false);
      await stopRecording();
    }
    else {
      setRecording(true);
      await startRecording(flash);
    }
  }
  const renderScene = SceneMap({
    photo: () => <Photo takePhoto={photoCapture} cameraSwitch={changeCameraDevice} />,
    video: () => <Video takePhoto={photoCapture} startRecording={videoCapture} cameraSwitch={changeCameraDevice} recording={recording} />,
  });
  if (device == null) return <LoadingIndicator />
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isFocused}
        photo={true}
        video={true}
        zoom={zoomValue}
        audio={true}
        ref={cameraRef}
        enableHighQualityPhotos
      />
      {cameraDevice === "back" && <CameraFeatureController changeFlash={changeFlash} flash={flash} />}
      <View style={{ position: "absolute", bottom: 0 }}>
        <Text style={{ left: 10 }}>{zoomValue}X</Text>
        <Slider
          style={{ width: metrics.screenWidth, height: 40 }}
          step={0.1}
          minimumValue={1}
          maximumValue={device.maxZoom}
          onValueChange={(value) => zoomValue === 0 ? setZoomValue(1) : setZoomValue(value)}
          thumbTintColor={colors.white}
          minimumTrackTintColor={colors.white}
          maximumTrackTintColor={colors.white}
        />
        <View style={{ backgroundColor: colors.header, height: metrics.screenWidth * 0.5, width: metrics.screenWidth }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: metrics.screenWidth }}
            renderTabBar={props => (
              <TabBar
                {...props}
                activeColor={colors.white}
                inactiveColor={colors.white}
                indicatorStyle={{
                  backgroundColor: colors.white,
                  marginHorizontal: 90,
                  width: 45
                }}
                style={{
                  backgroundColor: colors.header,
                  elevation: 0
                }}
                indicatorContainerStyle={{
                  width: metrics.screenWidth
                }}
                contentContainerStyle={{
                  justifyContent: "center"
                }}
                tabStyle={{ elevation: 0, width: 140 }}
                labelStyle={{ fontSize: 14 }}
                getLabelText={({ route }) => route.title}
              />
            )}
          />
        </View>
      </View>
    </View>
  )
}

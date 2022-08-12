import React, { useRef, useState } from 'react'
import { Camera } from 'react-native-vision-camera';

type FlashProps = 'on' | 'off' | 'auto';
type CameraDevice = 'back' | 'front';

const useCamera = () => {
    const cameraRef = useRef<Camera>(null);
    const [flash, setFlash] = useState<FlashProps>("off");
    const [cameraDevice, setCameraDevice] = useState<CameraDevice>("back");
    const takePhoto = async (flash: "on" | "off" | "auto") => {
        let result = await cameraRef.current?.takePhoto({
            flash: cameraDevice === "front" ? "off" : flash
        })
        return result;
    }
    const startRecording = async (flash: "on" | "off" | "auto") => {
        await cameraRef.current?.startRecording({
            flash: cameraDevice === "front" ? "off" : flash,
            onRecordingFinished: (video) => console.log(video),
            onRecordingError: (error) => console.error(error)
        })
    }
    const stopRecording = async () => {
        await cameraRef.current?.stopRecording();
    }
    const changeCameraDevice = () => {
        if (cameraDevice === "back") {
            setCameraDevice("front");
        }
        else {
            setCameraDevice("back");
        }
    }
    const changeFlash = () => {
        if (flash === "off") {
            setFlash("on");
        }
        if (flash === "on") {
            setFlash("auto");
        }
        if (flash === "auto") {
            setFlash("off");
        }
    }
    return { cameraRef, takePhoto, flash, changeFlash, cameraDevice, changeCameraDevice, startRecording, stopRecording };
}

export default useCamera;
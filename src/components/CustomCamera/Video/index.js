import React from 'react'
import { CameraController } from '../../CameraController'

export const Video = ({ takePhoto, startRecording, cameraSwitch, recording }) => {
  return (
    <CameraController 
      firstEvent={takePhoto}
      secondEvent={startRecording}
      thirdEvent={cameraSwitch}
      recording={recording}
      video
    />
  )
}

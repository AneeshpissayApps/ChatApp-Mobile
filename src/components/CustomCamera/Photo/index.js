import React from 'react'
import { CameraController } from '../../CameraController'

export const Photo = ({ takePhoto, cameraSwitch }) => {
    return (
        <CameraController secondEvent={takePhoto} thirdEvent={cameraSwitch} />
    )
}

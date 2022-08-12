import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { colors } from '../../assets/colors'

type CameraFeatureControllerProps = {
    changeFlash: () => void;
    flash: "off" | "on" | "auto";
}

const CameraFeatureController : FunctionComponent<CameraFeatureControllerProps> = ({ changeFlash, flash }) => {
    return (
        <View style={{ position: "absolute", right: 0 }}>
            <IconButton icon={flash === "off" ? "flash-off" : flash === "on" ? "flash" : "flash-auto"} onPress={changeFlash} style={{backgroundColor: colors.header}} />
        </View>
    )
}

export default CameraFeatureController
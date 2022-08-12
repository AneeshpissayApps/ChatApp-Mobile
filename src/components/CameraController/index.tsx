import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { colors } from '../../assets/colors'

type CameraControllerProps = {
    video?: boolean;
    firstEvent: () => void;
    secondEvent: () => void;
    thirdEvent: () => void;
    recording?: boolean;
}

export const CameraController: FunctionComponent<CameraControllerProps> = ({ video, firstEvent, secondEvent, thirdEvent, recording }) => {
    return (
        <View style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconButton icon="camera" onPress={firstEvent} />
                {video && <IconButton icon={recording ? "stop" : "checkbox-blank-circle"} size={recording ? 40 : 60} style={{ position: "absolute", left: recording ? 70 : 55 }} color={colors.red} />}
                <IconButton icon="checkbox-blank-circle-outline" size={70} onPress={secondEvent} />
                {!recording && <IconButton icon="camera-switch" onPress={thirdEvent} style={{ backgroundColor: colors.background, borderColor: colors.white, borderWidth: 0.1 }} />}
            </View>
        </View>
    )
}

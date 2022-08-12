import React, { FunctionComponent, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton, Text } from 'react-native-paper';
import Video from 'react-native-video';
import { colors } from '../../assets/colors';
import metrics from '../../metrics';
import { formatTime } from '../../utils/stopwatch';

type CustomVideoProps = {
    time: string;
}

export const CustomVideo : FunctionComponent<CustomVideoProps> = ({time}) => {
    const videoRef = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);
    return (
        <View>
            <Video
                source={{ uri: "https://file-examples.com/storage/fe4d958fe962e9966a024a6/2017/04/file_example_MP4_480_1_5MG.mp4" }}
                ref={videoRef}
                style={styles.backgroundVideo}
                resizeMode="cover"
                onLoad={(data) => setDuration(data.duration)}
                paused={paused}
            />
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }}>
                <IconButton
                    icon={`${paused ? "play" : "pause"}-circle`}
                    size={50}
                    onPress={() => setPaused(!paused)}
                />
            </View>
            <Text style={{fontSize: 10, position: "absolute", bottom: 0, left: 5}}>{formatTime(parseInt(duration.toString()))}</Text>
            <Text style={{ fontSize: 10, position: "absolute", bottom: 0, right: 5 }}>{time}</Text>
        </View>
    )
}

var styles = StyleSheet.create({
    backgroundVideo: {
        width: metrics.screenWidth * 0.66,
        height: metrics.screenWidth * 0.66,
        borderRadius: 10
    },
});
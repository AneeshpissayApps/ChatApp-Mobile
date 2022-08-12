import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { Avatar, IconButton, Text } from 'react-native-paper'
import { colors } from '../../assets/colors'
import metrics from '../../metrics'
import Slider from "@react-native-community/slider";
import { getAvatarLabel } from '../../utils/avatar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

type ChatBubbleAudioProps = {
    reverse?: boolean;
    audio: string;
    time: string;
}

export const ChatBubbleAudio: FunctionComponent<ChatBubbleAudioProps> = ({ reverse, audio, time }) => {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
    const onStartPlay = async () => {
        if (playing) {
            await audioRecorderPlayer.stopPlayer();
            audioRecorderPlayer.removePlayBackListener();
            setPlaying(false);
        }
        else {
            await audioRecorderPlayer.setSubscriptionDuration(1);
            await audioRecorderPlayer.startPlayer("https://res.cloudinary.com/aneeshpissay/video/upload/v1659010379/Achyutam_Keshavam_Krishna_Damodaram_Art_of_Living_-_Aks_Lakshmi_Padmini_Chandrashekar_-_Audio_bgcnz4.mp3");
            audioRecorderPlayer.addPlayBackListener((e) => {
                setDuration(e.duration);
                setProgress(e.currentPosition);
                setPlaying(true);
                return;
            });
        }
    }
    useEffect(() => {
        console.log(progress);
    }, [progress]);
    return (
        <View style={{ backgroundColor: colors.blue, borderRadius: 10, padding: 7, margin: 10, alignSelf: reverse ? "flex-end" : "flex-start", maxWidth: metrics.screenWidth * 0.7, minWidth: metrics.screenWidth * 0.2, flexDirection: "row", display: "flex", alignItems: "center" }}>
            <View>
                <Avatar.Text label={getAvatarLabel("Aneesh Pissay")} size={40} style={{ backgroundColor: colors.white }} color={colors.blue} />
                <Icon name='microphone' style={{ position: "absolute", right: 0, bottom: 0 }} color={colors.background} />
            </View>
            <IconButton
                icon={playing ? "pause" : "play"}
                onPress={onStartPlay}
            />
            <Slider
                style={{ width: metrics.screenWidth * 0.45, height: 40 }}
                value={progress}
                minimumValue={0}
                maximumValue={duration}
                thumbTintColor={colors.white}
                onSlidingComplete={(value) => audioRecorderPlayer.seekToPlayer(parseInt(value.toFixed()))}
                minimumTrackTintColor={colors.white}
                maximumTrackTintColor={colors.white}
            />
            <Text style={{ fontSize: 10, position: "absolute", right: 5, bottom: 0 }}>{time}</Text>
        </View>
    )
}

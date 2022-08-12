import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react'
import { Image, View, Animated, PanResponder, Vibration, ScrollView, ImageBackground } from 'react-native';
import { IconButton, Text, TextInput, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../assets/colors';
import { AnimatedSlideInDown } from '../../../components/AnimatedSlideInDown';
import { AnimatedSlideLeftRight } from '../../../components/AnimatedSlideLeftRight';
import { ChatHeaderTitle } from '../../../components/ChatHeaderTitle';
import metrics from '../../../metrics';
import { chatViewStyles } from '../../../styles/ChatViewStyles';
import { handleMicrophonePermission } from '../../../utils/permission';
import { AnimatedGestureHandler } from '../../../components/AnimatedGestureHandler';
import { useSharedValue } from 'react-native-reanimated';
import { AnimatedFadeInOut } from '../../../components/AnimatedFadeInOut';
import useTimer from '../../../hooks/useTimer';
import { formatTime } from '../../../utils/stopwatch';
import { AnimatedScrollView } from '../../../components/AnimatedScrollView';
import { ChatBubbleText } from '../../../components/ChatBubbleText';
import { ChatBubbleImage } from '../../../components/ChatBubbleImage';
import { ChatBubbleAudio } from '../../../components/ChatBubbleAudio';
import { ChatBubbleVideo } from '../../../components/ChatBubbleVideo';

var interval;

const ChatView = () => {
    const route = useRoute();
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <TouchableRipple>
                    <ChatHeaderTitle title={route.params.title} />
                </TouchableRipple>
            )
        })
    }, []);
    const [isRecording, setIsRecording] = useState(false);
    const [autoRecord, setAutoRecord] = useState(false);
    const captureX = useSharedValue(0);
    const captureY = useSharedValue(0);
    const [isDeleted, setIsDeleted] = useState(false);
    const { handleStart, handleReset, timer, handlePause, handleResume, isPaused } = useTimer(0);
    const recordMicrophone = async () => {
        if (isRecording) {
            if (captureX.value < -30) {
                setIsDeleted(true);
                setIsRecording(false);
                handleReset();
                setTimeout(() => {
                    setIsDeleted(false);
                }, 1000);
                clearInterval(interval);
            }
            else if (captureY.value < -50) {
                setAutoRecord(true);
            }
        }
        else {
            setIsRecording(true);
            handleStart();
            interval = setInterval(() => {
                console.log("Running");
                if (captureX.value < -30) {
                    setIsDeleted(true);
                    setIsRecording(false);
                    handleReset();
                    setTimeout(() => {
                        setIsDeleted(false);
                    }, 1000);
                    clearInterval(interval);
                }
                else if (captureY.value < -50) {
                    setAutoRecord(true);
                    clearInterval(interval);
                }
            }, 1);
            let audioGranted = await handleMicrophonePermission("request") === "granted";
            if (audioGranted) {
                //    recorder = new Recorder(`file://${RNFS.DownloadDirectoryPath}/filename.mp3`).record();
            }
        }
    }
    const deleteRecordedAudio = () => {
        setIsDeleted(false);
        setAutoRecord(false);
        setIsRecording(false);
        handleReset();
    }
    const sendRecordedAudio = () => {
        setIsDeleted(false);
        setAutoRecord(false);
        setIsRecording(false);
        handleReset();
        clearInterval(interval);
    }
    const pauseResumeMicrophone = () => {
        if (isPaused) {
            handleResume();
        }
        else {
            handlePause();
        }
    }
    return (
        <View style={chatViewStyles.container}>
            <ImageBackground source={{ uri: "https://res.cloudinary.com/aneeshpissay/image/upload/v1659009608/wp2785906_piqunu.jpg" }} resizeMode="cover" style={{ flex: 1, width: "100%", height: "100%" }}>
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <ScrollView style={{ flex: 1, maxHeight: metrics.screenHeight * 0.81 }}>
                        <ChatBubbleText value="." time="12:02" />
                        <ChatBubbleText reverse value="Hi" time="10:10" />
                        <ChatBubbleImage src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" time="15:43" />
                        <ChatBubbleImage src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000" time="15:56" reverse />
                        <ChatBubbleAudio time='12:00' />
                        <ChatBubbleAudio time='12:00' reverse />
                        <ChatBubbleVideo time='22:23' />
                    </ScrollView>
                    <View style={chatViewStyles.chatViewFooter}>
                        <TextInput
                            style={chatViewStyles.chatViewFooterTextField}
                            activeUnderlineColor="transparent"
                            underlineColor="transparent"
                            selectionColor={colors.white}
                            placeholder="Message"
                            left={<TextInput.Icon name={isDeleted ? "delete" : "emoticon"} color={isDeleted ? colors.red : colors.white} />}
                            right={<TextInput.Icon name="paperclip" />}
                        />
                        <View style={{ zIndex: 1 }}>
                            <AnimatedGestureHandler
                                captureX={captureX}
                                captureY={captureY}
                            >
                                <IconButton icon="microphone" color={colors.white} onPressIn={recordMicrophone} onPressOut={recordMicrophone} onPress={sendRecordedAudio} size={30} style={[chatViewStyles.chatViewSendIcon, { transform: [{ scale: isRecording ? 2 : 1 }] }]} />
                            </AnimatedGestureHandler>
                        </View>
                    </View>
                    {isRecording && <View style={[chatViewStyles.chatViewFooterTextField, chatViewStyles.chatRecordingFooter]}>
                        <View style={{ position: 'absolute', display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Icon size={24} name="microphone" color={colors.red} style={{ marginRight: 10 }} />
                            <AnimatedFadeInOut
                                children={<Text>{formatTime(timer)}</Text>}
                            />
                        </View>
                        <AnimatedSlideLeftRight
                            start={metrics.screenWidth * 0.3}
                            end={metrics.screenWidth * 0.35}
                            duration={2000}
                            children={<View style={chatViewStyles.chatRecordingFooterContainer}><Icon size={24} name="chevron-left" /><Text>Slide to Cancel</Text></View>}
                        />
                    </View>}
                    {autoRecord && <View style={[chatViewStyles.chatFooterAutoRecordContainer]}>
                        <AnimatedFadeInOut
                            children={<Text style={{ fontSize: 18, marginLeft: 10 }}>{formatTime(timer)}</Text>}
                        />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <IconButton icon="delete" onPress={deleteRecordedAudio} />
                            <IconButton icon={`${isPaused ? "play" : "pause"}-circle-outline`} onPress={pauseResumeMicrophone} size={30} color={colors.red} />
                            <IconButton icon="send" onPress={sendRecordedAudio} style={{ backgroundColor: colors.blue }} size={26} />
                        </View>
                    </View>}
                    {isRecording && !autoRecord && <AnimatedSlideInDown
                        children={<Image
                            source={require("../../../assets/gif/lock.gif")}
                            style={chatViewStyles.lockImage}
                            resizeMode="cover"
                        />
                        }
                        start={metrics.screenHeight * 0.9}
                        end={metrics.screenHeight * 0.95}
                    />}
                </View>
            </ImageBackground>
        </View>
    )
}

export default ChatView;
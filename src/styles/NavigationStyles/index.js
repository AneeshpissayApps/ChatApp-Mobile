import { TransitionPresets } from "@react-navigation/stack"
import { colors } from "../../assets/colors"
import { fonts } from "../../assets/fonts"

export const barDarkStyles = {
    tabBarStyle: {
        backgroundColor: colors.header
    },
    tabBarLabelStyle: {
        fontFamily: fonts.semibold,
        color: colors.white
    },
    tabBarIndicatorStyle: { 
        backgroundColor: colors.white 
    }
}

export const stackDarkStyles = { 
    headerStyle: { 
        elevation: 0, 
        backgroundColor: colors.header 
    }, 
    headerTitleStyle: { 
        fontFamily: fonts.medium, 
        color: colors.white 
    },
    ...TransitionPresets.SlideFromRightIOS, 
}

export const barLightStyles = {
    tabBarStyle: {
        backgroundColor: colors.blue
    },
    tabBarLabelStyle: {
        fontFamily: fonts.semibold,
        color: colors.white
    },
    tabBarIndicatorStyle: { 
        backgroundColor: colors.white 
    }
}

export const stackLightStyles = { 
    headerStyle: { 
        elevation: 0, 
        backgroundColor: colors.blue 
    }, 
    headerTitleStyle: { 
        fontFamily: fonts.medium, 
        color: colors.white 
    },
    ...TransitionPresets.SlideFromRightIOS,  
}

export const cameraTabLightStyles = {
    tabBarStyle: {
        backgroundColor: colors.white
    },
    tabBarLabelStyle: {
        fontFamily: fonts.semibold,
        color: colors.white
    },
    tabBarIndicatorStyle: { 
        backgroundColor: colors.blue 
    }
}

export const cameraTabDarkStyles = {
    tabBarStyle: {
        backgroundColor: colors.background,
        elevation: 0
    },
    tabBarLabelStyle: {
        fontFamily: fonts.semibold,
        color: colors.white
    },
    tabBarIndicatorStyle: { 
        backgroundColor: colors.white 
    }
}
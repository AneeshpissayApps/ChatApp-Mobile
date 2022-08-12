import { Platform } from "react-native";
import { request, check, PERMISSIONS } from "react-native-permissions";

//Camera Permission
export const handleCameraPermission = async (type: 'request' | 'check') => {
    if(Platform.OS === 'android') {
        if(type === 'check') {
            return await check(PERMISSIONS.ANDROID.CAMERA);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.ANDROID.CAMERA);
        }
    }
    else if(Platform.OS === 'ios') {
        if(type === 'check') {
            return await check(PERMISSIONS.IOS.CAMERA);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.IOS.CAMERA);
        }
    }
}

//Location Permission
export const handleLocationPermission = async (type: 'request' | 'check') => {
    if(Platform.OS === 'android') {
        if(type === 'check') {
            return await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
    }
    else if(Platform.OS === 'ios') {
        if(type === 'check') {
            return await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
        }
    }
}

//Contacts Permission
export const handleContactsPermission = async (type: 'request' | 'check') => {
    if(Platform.OS === 'android') {
        if(type === 'check') {
            return await check(PERMISSIONS.ANDROID.READ_CONTACTS);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.ANDROID.READ_CONTACTS);
        }
    }
    else if(Platform.OS === 'ios') {
        if(type === 'check') {
            return await check(PERMISSIONS.IOS.CONTACTS);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.IOS.CONTACTS);
        }
    }
}

//Microphone Permission
export const handleMicrophonePermission = async (type: 'request' | 'check') => {
    if(Platform.OS === 'android') {
        if(type === 'check') {
            return await check(PERMISSIONS.ANDROID.RECORD_AUDIO);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
        }
    }
    else if(Platform.OS === 'ios') {
        if(type === 'check') {
            return await check(PERMISSIONS.IOS.MICROPHONE);
        }
        else if(type === 'request') {
            return await request(PERMISSIONS.IOS.MICROPHONE);
        }
    }
}

//Read Storage Permission - Android
export const handleReadStoragePermission = async (type: 'request' | 'check') => {
    if(type === 'check') {
        return await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    }
    else if(type === 'request') {
        return await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    }
}

//Write Storage Permission - Android
export const handleWriteStoragePermission = async (type: 'request' | 'check') => {
    if(type === 'check') {
        return await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    }
    else if(type === 'request') {
        return await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    }
}

//Read Storage Permission - IOS
export const handleMediaLibraryPermission = async (type: 'request' | 'check') => {
    if(type === 'check') {
        return await check(PERMISSIONS.IOS.MEDIA_LIBRARY);
    }
    else if(type === 'request') {
        return await request(PERMISSIONS.IOS.MEDIA_LIBRARY);
    }
}

//Write Storage Permission - Android
export const handlePhotoLibraryPermission = async (type: 'request' | 'check') => {
    if(type === 'check') {
        return await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    }
    else if(type === 'request') {
        return await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    }
}
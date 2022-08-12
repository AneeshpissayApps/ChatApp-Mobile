import React from 'react'
import { View } from 'react-native'
import { Caption, Text } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { colors } from '../../../assets/colors';
import metrics from '../../../metrics';
import ViewShot from "react-native-view-shot";

const MyCode = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ViewShot style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0, justifyContent: "center", alignItems: "center" }} ref={props.route.params.qrCodeRef} options={{ fileName: "Aneeshpissay", format: "png", quality: 0.9 }}>
        <View style={{ backgroundColor: colors.grey, padding: 50, alignItems: "center", borderRadius: 10 }}>
          <Text style={{ fontSize: 18 }}>Aneesh Pissay</Text>
          <Caption style={{ fontSize: 11, marginBottom: 10 }}>Whatsapp Contact</Caption>
          <View style={{ borderRadius: 10, padding: 10, backgroundColor: colors.white }}>
            <QRCode
              value={JSON.stringify({ name: "Aneesh Pissay", phone: "+916360584064" })}
              size={metrics.screenWidth * 0.4}
            />
          </View>
        </View>
      </ViewShot>
    </View>
  )
}

export default MyCode;
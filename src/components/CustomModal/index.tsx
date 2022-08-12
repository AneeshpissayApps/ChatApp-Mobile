import React, { FunctionComponent } from 'react'
import { useColorScheme } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { colors } from '../../assets/colors';
import useTheme from '../../hooks/useTheme';
import { useAppSelector } from '../../stores/hooks';

type CustomModalProps = {
    children: JSX.Element;
    visible: boolean;
    hideModal: () => void;
}

export const CustomModal: FunctionComponent<CustomModalProps> = ({ children, visible, hideModal }) => {
    const { appTheme } = useTheme();
    const containerStyle = { backgroundColor: appTheme(colors.white, colors.background), padding: 20, margin: 20 };
    return (
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                {children}
            </Modal>
        </Portal>
    )
}

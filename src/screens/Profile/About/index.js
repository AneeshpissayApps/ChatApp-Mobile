import React, { useState } from 'react'
import { View } from 'react-native';
import { Divider, List, RadioButton, Text } from 'react-native-paper';
import { colors } from '../../../assets/colors';

const availableOptions = ["Available", "Busy", "At School", "At the movies", "At work"]

const About = () => {
    const [value, setValue] = React.useState(availableOptions[0]);
    return (
        <View>
            <List.Section>
                <List.Subheader>Currently set to</List.Subheader>
                <List.Item
                    title="Available"
                    right={props => <List.Icon icon="pencil" color={colors.green} />}
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Select About</List.Subheader>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    {availableOptions.map((option, index) => (
                        <RadioButton.Item label={option} key={index.toString()} value={option} />
                    ))}
                </RadioButton.Group>
            </List.Section>
        </View>
    )
}

export default About;
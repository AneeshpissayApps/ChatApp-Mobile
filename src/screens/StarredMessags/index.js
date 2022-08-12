import React from 'react'
import { ScrollView } from 'react-native'
import { StarredMessage } from '../../components/StarredMessage';

const StarredMessages = () => {
  return (
    <ScrollView>
        <StarredMessage />
    </ScrollView>
  )
}

export default StarredMessages;
import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import userAuth from '../hooks/userAuth';

export default function Account() {

    const {auth} = userAuth();
    return (
        <View>
            {auth ? <UserData /> : <LoginForm /> }
            <Text></Text>
        </View>
    )
}

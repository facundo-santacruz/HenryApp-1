import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Icon } from 'react-native-elements'

export default function Menu ( {navigation}){
    // const navigation = useNavigation()
    return (
        <View style={{width: 200}}>
            {/* <Button title='Menu' onPress={() => navigation.toggleDrawer()}></Button> */}
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginTop: 10}} >
                <Icon name='bars' type='font-awesome-5'/>
            </TouchableOpacity>
        </View>
    )
}
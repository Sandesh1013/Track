// import '../_mockLocation';
import React,{ useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {

    const {state, addLocation} = useContext(LocationContext);

    const callback = useCallback(
        (location) => {
            addLocation(location, state.recording);
        },
        [state.recording]
    );

    const [err] = useLocation(isFocused || state.recording , callback);

    return(
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={styles.textStyle} h2>Create new track</Text>
            <Map />
            { err ? <Text style={styles.error}>Please enable location services</Text> : null }
            <TrackForm/>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title : 'Add Track',
    tabBarIcon : <FontAwesome name="plus" size={24} color="black" />
}

const styles = StyleSheet.create({
    textStyle:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold"
    },
    error:{
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold",
        color:"red"
    }
});

export default withNavigationFocus(TrackCreateScreen);
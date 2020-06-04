import React,{ useContext, useEffect } from 'react';
import { View,StyleSheet } from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () =>{

    const {state,changeName,startRecording,stopRecording} = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return(
        <>
            <Input style={{marginTop:10}} value={state.name} onChangeText={(name) => changeName(name)} placeholder="Enter new track name"/>
            { state.recording ? <Spacer><Button title="Stop" onPress={() => stopRecording()} /></Spacer> : <Spacer><Button title="Start Recording" onPress={() => startRecording()} /></Spacer> }
            { !state.recording && state.locations.length ? <Spacer><Button title="Save recording" onPress={saveTrack} /></Spacer> : null }
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackForm;
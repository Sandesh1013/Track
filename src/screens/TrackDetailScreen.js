import React,{ useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {

    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find((t) => t._id === _id );
    const initialCoords = track.locations[0].coords;

    return(
        <View>
            <Text style={styles.textStyle}>{track.name}</Text>
            <MapView 
                style={styles.map}
                initialRegion={{
                    longitudeDelta:0.01,
                    latitudeDelta:0.01,
                    ...initialCoords
                }}
            >
                <Polyline coordinates={track.locations.map( (loc) => loc.coords )}/>
            </MapView>
        </View>
    );
};

TrackDetailScreen.navigationOptions = {
    title:'Track Detail',
    headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:"center"
    },
    map:{
        height:300,
        margin:10
    }
});

export default TrackDetailScreen;
import React,{ useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import {ListItem} from 'react-native-elements';

const TrackListScreen = ({navigation}) => {

    const { state,fetchTracks } = useContext(TrackContext);
    return(
        <View>
        <NavigationEvents onWillFocus={() => fetchTracks() } />
        { state.length === 0 ? 
            <Text style={styles.initial}>No tracks recorded</Text> :
            <FlatList
                data={state}
                keyExtractor={(item) => item._id }
                renderItem={({ item }) =>{
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail',{ _id:item._id })}>
                            <ListItem chevron={true} title={item.name} />
                        </TouchableOpacity>
                    ); 
                }}
            />
        }
        </View>
    );
};

TrackListScreen.navigationOptions = {
    title:'Tracks',
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
    initial:{
        textAlign:'center',
        marginTop:250
    }
});

export default TrackListScreen;
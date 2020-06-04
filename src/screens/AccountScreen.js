import React, {useContext} from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {

    const { state, signout } = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Account</Text>
            <Spacer>
                <Button title="Sign Out" onPress={ () => signout() }/>
            </Spacer>
        </View>
    );
};

AccountScreen.navigationOptions = {
    title:'Account',
    tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:"center",
        marginBottom:100
    },
    container:{
        flex:1,
        justifyContent:"center"
    }
});

export default AccountScreen;
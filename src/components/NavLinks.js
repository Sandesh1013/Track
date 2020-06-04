import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLinks = ({ navigation, text, routeName }) =>{
    return(
        <TouchableOpacity onPress={ () => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.linking}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linking:{
        color:"blue",
        textAlign:"center"
    }
});

export default withNavigation(NavLinks);
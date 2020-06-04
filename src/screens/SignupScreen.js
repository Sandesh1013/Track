import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import NavLinks from '../components/NavLinks';

const SignupScreen = ({navigation}) => {

    const {state, clearErrorMessage, signup} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm 
                header="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButton="Sign Up"
                onSubmit={ ({ email, password }) => signup({ email, password }) }
            />
            <NavLinks text="Already have an account? Sign In instead!" routeName="Signin"/>
        </View>
    );
};

SignupScreen.navigationOptions = {
    headerShown:false
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
});

export default SignupScreen;
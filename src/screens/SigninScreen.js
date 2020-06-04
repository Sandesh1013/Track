import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import NavLinks from '../components/NavLinks';

const SigninScreen = () => {

    const {state, clearErrorMessage, signin} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm 
                header="Sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButton="Sign In"
                onSubmit={ ({ email, password }) => signin({ email, password }) }
            />
            <NavLinks text="Don't have an account? Sign Up instead!" routeName="Signup"/>
        </View>
    );
};

SigninScreen.navigationOptions = {
    headerShown:false
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
});

export default SigninScreen;

import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
        <View>
            <Spacer>
                <Text h3 style={styles.textStyle}>{props.header}</Text>
            </Spacer>
            <Input label="Email" 
                value={email} 
                onChangeText={(newMail) => setEmail(newMail)}
                autoCapitalize="none"
                autoCorrect= {false}
            />
            <Spacer/>
            <Input label="Password" 
                secureTextEntry={true} 
                value={password} 
                onChangeText={(newPassword) => setPassword(newPassword)}
                autoCapitalize="none"
                autoCorrect= {false}
            />
            { props.errorMessage ? <Text style={styles.errorMessage}>{props.errorMessage}</Text> : null}
            <Spacer>
                <Button title={props.submitButton} onPress={ () => props.onSubmit({ email, password }) }/>
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        textAlign:"center"
    },  
    errorMessage:{
        fontSize:18,
        color:"red",
        textAlign:"center",
        fontWeight:"bold"
    },
});

export default AuthForm;
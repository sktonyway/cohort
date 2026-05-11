import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    source={require('../assets/images/logo.png')}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Sign In</Text>
                <Text style={styles.subheading}>Lets Experience the joy of telecare AI.</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.icons}><FontAwesome name="facebook-f" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity style={styles.icons}><AntDesign name="google" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity style={styles.icons}><Entypo name="instagram" size={24} color="black" /></TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <View style={{ flexDirection: 'row' }}>

                    <Text>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgetPasswordText}>Forget your password?</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    headerContainer: {
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    subheading: {
        fontSize: 16,
        color: '#666',
    },
    formContainer: {

    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 20,
        padding: 14,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        marginTop: 8,
    },
    button: {
        backgroundColor: '#5ecd0eff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconsContainer: {
        paddingHorizontal: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    icons: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#979494ff',
        borderRadius: 10,
        marginBottom: 20,
    },
    footerContainer: {
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signupText: {
        color: '#5ecd0eff',
        fontWeight: 'bold',
    },
    forgetPasswordText: {
        color: '#5ecd0eff',
        fontWeight: 'bold',
    },
    image: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: '#979494ff',
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 20,
        aspectRatio: 1
    }
})
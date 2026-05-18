import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Navbar = () => {
    return (
        <View style={styles.flex}>
            <Image
                source={{ uri: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg" }}
                style={{ width: 50, height: 50, borderRadius: 5, borderWidth:1, borderColor:'#fff' }}
            />
            <Text style={styles.bold}>John Donne</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Feather name="search" size={24} color="black" />
                <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
            </View>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    flex:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        padding:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        backgroundColor:'#f2f2f2',
    },
    bold:{
        fontWeight:'bold',
        fontSize:24,
    }
})
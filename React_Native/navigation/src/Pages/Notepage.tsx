import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import {Entypo} from '@expo/vector-icons';


const Notepage = () => {
    const data = [
        { id: 1, title: "Spiderman", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", updated: "monday", by: "John Donne" },
        { id: 2, title: "Batman", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", updated: "tuesday", by: "sk" },
        { id: 3, title: "Superman", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", updated: "wednesday", by: "sk" },
        { id: 4, title: "Ironman", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", updated: "thursday", by: "tony" },
        { id: 5, title: "Hulk", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", updated: "friday", by: "bruce" },
        { id: 6, title: "Thor", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", updated: "saturday", by: "thor" },
        { id: 7, title: "Captain America", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.", updated: "sunday", by: "steve" },
    ]
    return (
        <ScrollView>

            <View style={[styles.flex, styles.main]}>
                <Navbar />
                <View style={[styles.flex, styles.row]}>
                    <View style={styles.two}>
                        <Text>Notes</Text>
                    </View>
                    <View style={styles.two}>
                        <Text>Folders</Text>
                    </View>
                </View>
                <View>
                    {
                        data.map((item) => (
                            <View key={item.id} style={styles.mini}>

                                <View style={styles.pad}>
                                    <Text style={styles.bold}>{item.title}</Text>
                                    <View><Entypo name="dots-two-vertical" size={18} color="black" /></View>
                                </View>
                                <View style={{ paddingHorizontal: 20,paddingVertical:5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, backgroundColor: '#f2f2f2' }}>
                                    <Text>Updated: {item.updated}</Text>
                                    <Text> {item.by}</Text>
                                </View>
                            </View>
                        ))
                    }

                </View>
            </View>
        </ScrollView>
    )
}

export default Notepage

const styles = StyleSheet.create({
    flex: {
        display: 'flex',
    },
    row: {
        flexDirection: 'row',
    },
    main: {
        padding: 10,
    },
    two: {
        padding: 10,
        flex: 1,
        display: 'flex',
        alignItems: 'center',

    },
    mini: {
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        overflow: 'hidden',
    },
    pad: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bold:{
        fontWeight:'bold',
        fontSize:24,
    }
})
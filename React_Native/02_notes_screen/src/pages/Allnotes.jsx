import { StyleSheet, Text, View,  TextInput, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Allnotes = () => {
    const [notes, setNotes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [dark, setDark] = React.useState(false);

    React.useEffect(() => {
        async function allNotes(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(error => console.error(error));
        }
        allNotes();
        setLoading(false);
    }, []);

    function handlechange(text){
        function searchNote(text){
            const filteredNotes = notes.filter(
                (note) => note.title.toLowerCase().includes(text.toLowerCase()) ||
                note.body.toLowerCase().includes(text.toLowerCase())
            );
            setNotes(filteredNotes);
        }
        searchNote(text);    
        }
    if(loading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading...</Text>
            </View>
        )
    }
    else return (
    <ScrollView>
        <View style={{display:'flex', flexDirection:'row'}}>
            <TextInput style={{borderWidth: 1, borderColor: '#ccc', padding: 10, margin: 10, borderRadius: 5, width:'80%'}}
                placeholder='Search Notes'
                onChange={(e) => handlechange(e.nativeEvent.text)}
            />
            <Pressable onPress={() => setDark(!dark)} style={{backgroundColor: dark ? '#333' : '#fff', padding: 10, margin: 10, borderRadius: 5}}>  
                </Pressable>
        </View>
        {notes.map(note => (
            <Pressable key={note.id} >
            <View style={styles.noteContainer}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.notes}>{note.body}</Text>
            </View>
            </Pressable>
        ))}
    </ScrollView>
  )
}

export default Allnotes

const styles = StyleSheet.create({
    noteContainer: {
        padding: 10,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',    
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    notes: {
        fontSize: 16,
        fontStyle: 'italic',
    }
})
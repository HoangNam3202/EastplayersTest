import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Icon } from 'react-native-elements';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHome}>
                Eastplayers Test
            </Text>
            <TouchableOpacity
                onPress={() => { navigation.navigate('ToDoList') }}
                style={styles.btn_navigate}
            >
                <Text style={styles.number}>1</Text>
                <Text style={styles.name}>Todo list</Text>
                <Icon
                    name='navigate-next'
                    color='red'
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('CountryList') }}
                style={styles.btn_navigate}
            >
                <Text style={styles.number}>2</Text>
                <Text style={styles.name}>Country list</Text>
                <Icon
                    name='navigate-next'
                    color='red'

                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Preview') }}
                style={styles.btn_navigate}
            >
                <Text style={styles.number}>3</Text>
                <Text style={styles.name}>Image gallery</Text>
                <Icon
                    name='navigate-next'
                    color='red'

                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleHome: {
        color: 'red',
        marginVertical: 10,
        alignSelf: 'center',
        fontSize: 16,
        marginTop: Platform.OS === 'ios' ? 20 : 50
    },
    btn_navigate: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    number: {
        width: 30,
        height: 30,
        color: 'red',
        borderRadius: 30,
        backgroundColor: '#fde9e7',
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold',
        marginRight: 10,
    },
    name: {
        flex: 8
    },
})
export default Home;
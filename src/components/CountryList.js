import { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    FlatList
} from "react-native";
import { Icon } from 'react-native-elements';
import dataCountry from './dataCountry';

const CountryList = () => {
    const [data, setData] = useState(dataCountry);
    const [valuesInput, setValuesInput] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetch(`https://restcountries.com/v3.1/name/${valuesInput}`)
                .then(response => response.json())
                .then(data => {
                    if(data.length > 0){
                        setData(data);
                    }
                    else{
                        setData(dataCountry)
                    }
                });
            setLoading(false);
        }, 5000)
        return () => clearTimeout(delayDebounceFn);
    }, [valuesInput]);
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Search"
                    defaultValue={valuesInput}
                    onChangeText={(text) => {
                        setValuesInput(text);
                        setLoading(true);
                    }}
                >
                </TextInput>
                {loading ?
                    <ActivityIndicator
                        color='red'
                        size='small'>

                    </ActivityIndicator>
                    :
                    <Icon
                        name='navigate-next'
                    />
                }
            </View>
            <FlatList
                style={styles.flatListCon}
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <View style={styles.itemCountry}>
                        <Text style={styles.itemName}>{item.name.common}</Text>
                    </View>
                )}
            ></FlatList>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 15,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        flex: 9,
    },
    btn_add: {
        flex: 1,
    },
    title_add: {
        color: 'red',
        fontWeight: 'bold'
    },
    flatListCon:{
        marginTop: 15
    },
    itemCountry: {
        padding: 12,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
});
export default CountryList;
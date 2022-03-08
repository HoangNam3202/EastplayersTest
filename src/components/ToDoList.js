import { useState, useEffect } from "react";
import {
    Alert,
    FlatList,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

const ToDoList = () => {
    const [valuesInput, setValuesInput] = useState();
    const [dataSize, setDataSize] = useState();
    const [tasksNotDone, setTasksNotDone] = useState(0);
    const [data, setData] = useState([]);

    useEffect(async () => {
        setDataSize(data.length)
        const result = await data.reduce((total, itemCurr) => {
            if (!itemCurr.statusDone) {
                return total += 1
            }
            return total
        }, 0)
        setTasksNotDone(result);

    }, [data]);

    const handleAdd = () => {
        const randomId = Math.floor(Math.random() * 999)
        const obj = {
            id: randomId,
            name: valuesInput,
            statusDone: false
        }
        setData(prev => [...prev, obj]);
        setValuesInput('')
    }
    const handleTaskDone = (item) => {
        const result = data.map((obj) => {
            if (obj.id == item.id) {
                return { ...obj, statusDone: !obj.statusDone }
            }
            return obj;
        })
        setData(result);
    };
    const handleDeleteTask = (item) => {
        Alert.alert(
            "Delete a task ?",
            `Do you wanna delete this task '${item.name}' ?`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        data.map((obj, index) => {
                            if (obj.id == item.id) {
                                data.splice(index, 1)
                            }
                        })
                        setData(prev => [...prev]);
                    }
                }
            ]
        );

    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Search"
                    defaultValue={valuesInput}
                    onChangeText={(text) => setValuesInput(text)}
                >
                </TextInput>
                <TouchableOpacity
                    style={styles.btn_add}
                    onPress={handleAdd}
                >
                    <Text style={styles.title_add}>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.status}>
                    There are <Text>{tasksNotDone}</Text> tasks left
                    out of <Text>{dataSize}</Text> tasks
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => { handleTaskDone(item) }}
                    >
                        <View style={styles.itemList}>
                            <Text>
                                <Text style={styles.itemDot}>&bull; </Text>
                                <Text
                                    style={{ textDecorationLine: item.statusDone ? 'line-through' : 'none' }}
                                >
                                    {item.name}
                                </Text>
                            </Text>
                            <TouchableOpacity onPress={() => { handleDeleteTask(item) }}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            >

            </FlatList>
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
        padding: 4,
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
    status: {
        marginHorizontal: 8,
        fontWeight: '700',
        marginTop: 10
    },
    itemList: {
        marginHorizontal: 20,
        textAlign: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 3
    },
    itemDot: {
        fontWeight: "bold",
    },
});
export default ToDoList;
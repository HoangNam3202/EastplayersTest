import { useState } from "react";
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import GridImageView from 'react-native-grid-image-viewer';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Preview = ({ navigation }) => {
    const dataImage = [
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'https://cdn.lifehack.org/wp-content/uploads/2019/10/self-image-1024x768.jpeg',
        'https://www.w3schools.com/howto/img_forest.jpg',
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'https://cdn.lifehack.org/wp-content/uploads/2019/10/self-image-1024x768.jpeg',
        'https://www.w3schools.com/howto/img_forest.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'https://cdn.lifehack.org/wp-content/uploads/2019/10/self-image-1024x768.jpeg',
    ];

    return (
        <View style={styles.container}>
            <Text>I can't do it well. :'(</Text>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.gridImages}>
                    {dataImage.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('DetailImage', {image : item} )}}
                            >
                                <View>
                                    <Image style={styles.tinyLogo} source={{ uri: `${item}` }}></Image>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tinyLogo: {
        width: Math.floor(screenWidth / 3),
        height: Math.floor(screenWidth / 3),
    },
    gridImages: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
export default Preview;
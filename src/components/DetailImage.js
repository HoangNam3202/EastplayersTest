import ImageViewer from 'react-native-image-zoom-viewer';


const DetailImage = ({ navigation, route }) => {
    const images = [{
        url: route.params.image,
    }]
    return (
        <ImageViewer imageUrls={images} 
        />
    );
};
export default DetailImage;
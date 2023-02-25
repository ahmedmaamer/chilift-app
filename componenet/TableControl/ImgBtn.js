import { View, Text, Image, Pressable } from 'react-native'
import { StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const ImgBtn = () => {
    return (
        <View style={styles.slide}>
            <Image
                source={require('../../images/chilift.png')}
                style={{width:'70%',height:'11%',marginRight:15 ,marginBottom:15}}
            />
            <Pressable style={styles.connectContainer}>
                <Text style={styles.connectText}><Feather name='bluetooth' size={17}/> connect</Text>
            </Pressable>
            <Image
                source={require('../../images/table.jpg')}
                style={styles.imageComponent}
            />

        </View>
    )
}
export default ImgBtn;
const styles = StyleSheet.create({
    connectContainer: {
        height: 45,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#5F7045',
        width: 120,
        marginBottom: 35, 
    },
    connectText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 17,
    },
    imageComponent: {
        marginBottom: 30,
        height: '70%',
        width: '90%',
        borderRadius: 50,
        resizeMode: "stretch",
        marginRight: 20,
        borderColor: '#5F7045',
        borderWidth: 2
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-end',
        backgroundColor: "#fff",
        width: "70%"
    },

});
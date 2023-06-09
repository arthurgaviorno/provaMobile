import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewImg: {
        padding: 3,
        margin: '15%',
        width: '70%',
        height: 200,
        backgroundColor: 'cyan'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    viewData: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: '15px',       
        width: '70%',
        height: '100%',
    },
    item: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 3
    }, 
    stats: {
        fontSize: 14,
        color: 'white',
        marginBottom: 3
    }, 
    troca: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 3
        
    },
    btn: {
        padding: 10,
        backgroundColor: 'yellow'
    }
});

export default styles;
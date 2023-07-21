import { StyleSheet } from "react-native";
import color from "../../Color/color";

const styles = StyleSheet.create({

    addTask : {
        bottom:30,
        paddingHorizontal:30,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    input:{
        height:44,
        borderWidth:1,
        borderRadius:20,
        borderColor: color.xanhla,
        paddingHorizontal:20,
        paddingVertical:10,
        width:'80%',
    },
    iconWrapper:{
        width:44,
        height:44,
        backgroundColor: color.xanhla,
        borderRadius:44,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth:2,
        borderColor: color.xanhla

    },
    icon:{
        fontSize:30,
        color:'#fff'
    }
})

export default styles;
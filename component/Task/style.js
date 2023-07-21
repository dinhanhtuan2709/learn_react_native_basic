import { StyleSheet } from "react-native";
import color from "../../Color/color";

const styles = StyleSheet.create({

    item:{
      flexDirection: 'row',
      backgroundColor: color.xanhngoc,
      marginHorizontal:25,
      marginBottom: 15,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems:'center',
      justifyContent:'space-between'
    },
   
    square:{
      width:45,
      height:35,
      borderRadius:10,
      
      alignItems:'center',
      justifyContent:'center'
    },

    sole:{
      backgroundColor:color.xanhduong,
    },

    sochan:{
      backgroundColor:color.xanhla,
    },
    number:{
      fontWeight:16,
      fontWeight:'700',
      color:'white',
    },
    Todo:{
      width:'80%',
      color:'black',
      fontSize:20,
      fontWeight:'bold'
    },
})

export default styles;
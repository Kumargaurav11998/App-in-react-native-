import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";


const{width,height}=Dimensions.get("window")
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appdefultColor
    },
    AvatarContainer:{
        alignSelf:"center",
        marginTop:height/6,
        height:height/1.5,
        width:width-50
    },
    avatarStyle:{
        resizeMode:"contain",
      
    },
    texthead:{
       fontSize:22,
       color:colors.white,
       textAlign:"center",
       alignSelf:"center",
       fontFamily:"MartelSans-Black"
    }
})
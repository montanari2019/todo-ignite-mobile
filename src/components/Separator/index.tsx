import { View } from "react-native";

export function Separator(){
    return(
        <View>
            <View style={{height: 0.5, marginVertical: 32, width: "100%", backgroundColor: "#808080"}}></View>
        </View>
    )
}
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import useStore from "../useStore";

const Cart = ({ navigation }) => {

    const { saved } = useStore();

    return (
        <SafeAreaView className="flex-1 bg-slate-900 px-2">
            <StatusBar
                style="light"
            />
            <Text className="text-white text-2xl font-bold text-center">Cart</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="bg-slate-500 mx-6 rounded-xl my-3 p-2 items-center justify-center"
            >
                <Text className="font-bold text-lg text-white">Go home</Text>
            </TouchableOpacity>
            <ScrollView
                className="my-6"
                contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
            >
                {
                    saved && saved.map((item) => {
                        return (
                            <View
                                key={item.id}
                                className="bg-slate-700 my-4 p-6 items-center justify-center rounded-xl"
                            >
                                <Text className="text-lg mb-2 font-bold text-white">{item.name}</Text>
                                <Text className="text-white">{item.price}</Text>
                                <TouchableOpacity
                                    className="bg-slate-400 mt-3 px-4 py-2 rounded-xl"
                                    onPress={() => {
                                        addItemToCart(item.id)
                                    }}
                                >
                                    <Text>Remove from cart</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default Cart;
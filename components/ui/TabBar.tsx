import { StyleSheet, Text, View } from "react-native";

export default function TabBar() {
    return (
        <View style={styles.container}>
            <Text>TabBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: 'red'
    }
});
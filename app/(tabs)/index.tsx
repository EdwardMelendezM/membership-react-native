import {Pressable, Text, View} from "react-native";
import {Link, router} from "expo-router";

const HomePage = () => {
    return (
        <View>
            <Text>Home Page</Text>
            <Link href={'/users/1'}>Go to user 1</Link>
            <Pressable onPress={() => router.push({
                pathname: '/users/[id]',
                params: {id: 2}
            })}>
                <Text>Go to user 2</Text>
            </Pressable>
            <Link href={'/todos'}>Todo page</Link>
            <Link href={'/memberships'}>Memberships onichan</Link>
        </View>
    );
}

export default HomePage;

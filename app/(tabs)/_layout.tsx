import {Tabs} from "expo-router";

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen name='index' options={{
            headerTitle: "Home",
            title: "Home"
        }}/>
        <Tabs.Screen name='users/[id]' options={{
            headerTitle: "User page",
            title: "User"
        }}/>
        <Tabs.Screen name='todos/index' options={{
            headerTitle: "Todos",
            title: "Todos"
        }}/>
        <Tabs.Screen name='memberships/index' options={{
            headerTitle: "Memberships Page",
            title: "Memberships Page"
        }}/>
    </Tabs>
}

export default TabsLayout;

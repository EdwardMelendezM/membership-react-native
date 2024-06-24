import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#fff', // Color for the active tab
                tabBarInactiveTintColor: '#ccc', // Color for inactive tabs
                tabBarStyle: {
                    backgroundColor: '#000', // Background color for the tab bar
                },
                tabBarLabelStyle: {
                    fontSize: 12, // Font size for the labels
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#007AFF', // Color for the indicator
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Home",
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="users/[id]"
                options={{
                    headerTitle: "User page",
                    title: "User"
                }}
            />
            <Tabs.Screen
                name="todos/index"
                options={{
                    headerTitle: "Todos",
                    title: "Todos",
                }}
            />
            <Tabs.Screen
                name="memberships/index"
                options={{
                    headerTitle: "Memberships Page",
                    title: "Memberships Page",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="memberships/[id]"
                options={{
                    headerTitle: "Memberships [id]",
                    title: "Memberships [id]",
                    headerShown: false,
                    tabBarButton: () => null, // Hides this tab
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;

import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState("");

    useEffect(() => {
        setIsLoading(true);
        setTodos([
            {
                id: 1,
                title: "Todo 1",
                completed: false,
            },
            {
                id: 2,
                title: "Todo 2",
                completed: false,
            },
            {
                id: 3,
                title: "Todo 3",
                completed: false,
            },
        ]);
        setIsLoading(false);
    }, []);

    const addTodo = () => {
        if (newTodoTitle.trim() === "") {
            return; // No agregar tareas vacías
        }
        const newTodo = {
            id: Date.now(), // Asigna un ID único
            title: newTodoTitle,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setNewTodoTitle(""); // Limpia el campo de texto
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator />}
            {!isLoading && (
                <View style={styles.innerContainer} className={'onichan'}>
                    <Text style={styles.title}>Todos page</Text>
                    <FlatList
                        data={todos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.todoItem}
                                onPress={() => deleteTodo(item.id)}
                            >
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={styles.list}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="New todo"
                        value={newTodoTitle}
                        onChangeText={setNewTodoTitle}
                    />
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={addTodo}
                        activeOpacity={0.8} // Opacidad al presionar el botón
                    >
                        <Text style={[styles.buttonText]}>Agregar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    innerContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    todoItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    list: {
        flexGrow: 1,
    },
    input: {
        height: 40,
        borderColor: "green",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "green", // Color de fondo del botón
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff", // Color del texto del botón
        fontSize: 16,
    },
});

export default TodoPage;

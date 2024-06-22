import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import {router} from "expo-router";

const MembershipsListScreen = ({ navigation }) => {
    const [memberships, setMemberships] = useState([
        { id: "1", name: "Membresía Estándar", type: "Mensual", price: "$50" },
        { id: "2", name: "Membresía Premium", type: "Anual", price: "$150" },
        { id: "3", name: "Membresía VIP", type: "Trimestral", price: "$100" },
        { id: "4", name: "Membresía Estudiantil", type: "Anual", price: "$40" },
    ]);

    const handleDetails = (membership) => {
        router.push({
            pathname: '/memberships/[id]',
            params: {id: membership.id}
        });
    };

    const handleEdit = (membership) => {
        router.push({
            pathname: '/memberships/[id]',
            params: {id: membership.id}
        });
    };

    const handleAddMembership = () => {
        router.push({
            pathname: '/memberships/new'
        });
    };

    const renderMembership = ({ item }) => (
        <View style={styles.membershipContainer}>
            <Text style={styles.membershipName}>{item.name}</Text>
            <Text style={styles.membershipType}>Tipo: {item.type}</Text>
            <Text style={styles.membershipPrice}>Precio: {item.price}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleDetails(item)}>
                    <Text style={styles.buttonText}>Ver detalles</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleEdit(item)}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Membresías</Text>
            <FlatList
                data={memberships}
                renderItem={renderMembership}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddMembership}>
                <Text style={styles.addButtonText}>Agregar Membresía</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212", // Fondo oscuro para un estilo moderno
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#FFFFFF", // Texto blanco
        textAlign: "center",
    },
    list: {
        flex: 1,
    },
    membershipContainer: {
        backgroundColor: "#1E1E1E", // Fondo gris oscuro
        borderRadius: 8,
        padding: 20,
        marginBottom: 15,
    },
    membershipName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#FFFFFF", // Texto blanco
    },
    membershipType: {
        fontSize: 16,
        marginBottom: 5,
        color: "#CCCCCC", // Texto gris claro
    },
    membershipPrice: {
        fontSize: 16,
        marginBottom: 10,
        color: "#CCCCCC", // Texto gris claro
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#4CAF50", // Verde vibrante
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    addButton: {
        backgroundColor: "#FF5722", // Naranja vibrante
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 8,
    },
    addButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default MembershipsListScreen;

import React, {useEffect, useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Formik} from "formik";
import * as yup from "yup";
import {useLocalSearchParams} from "expo-router";

// Imaginemos que tenemos un logo del gimnasio
// import GymLogo from "./assets/gym-logo.png";

const MembershipsEditScreen = () => {
    const [memberships, setMemberships] = useState([
        {id: "1", name: "Membresía Estándar", type: "Mensual", price: "$50"},
        {id: "2", name: "Membresía Premium", type: "Anual", price: "$150"},
        {id: "3", name: "Membresía VIP", type: "Trimestral", price: "$100"},
        {id: "4", name: "Membresía Estudiantil", type: "Anual", price: "$40"},
    ]);

    const {id} = useLocalSearchParams<{ id: string }>();
    const [membership, setMembership] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "male",
        membershipType: "diary",
    })

    const validationSchema = yup.object().shape({
        name: yup.string().required("Nombre es obligatorio"),
        email: yup.string().email("Formato de correo inválido"),
        phone: yup.string().min(10, "Número de teléfono debe tener 10 dígitos").required("El número de teléfono es obligatorio"),
        age: yup.number().min(18, "Edad debe ser al menos de 18 años").required("Edad es obligatoria"),
        gender: yup.string().required("Género es obligatorio"),
        membershipType: yup.string().required("Tipo de membresía es obligatorio"),
    });

    const handleSubmit = (values) => {
        console.log("Formulario enviado exitosamente!", values);
    };

    useEffect(() => {
        console.log("ID de la membresía:", id);
        const exists = memberships.find((membership) => membership.id === id);
        if (!exists) {
            console.log("La membresía no existe");
            return
        }
        setMembership({
            name: "asdasd",
            email: "12312312",
            phone: "123123",
            age: "12",
            gender: "male",
            membershipType: "diary",
        })


    }, []);

    return (
        <View style={styles.container}>
            {/* Encabezado con el logo del gimnasio */}
            <View style={styles.header}>
                {/*<Image source={GymLogo} style={styles.logo} resizeMode="contain" />*/}
                <Text style={styles.title}>
                    {id !== 'new' ? `Editar Membresía ${id}` : "Nueva Membresía"}
                </Text>
            </View>
            <Formik
                initialValues={membership}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      setFieldValue,
                  }) => (
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                        />
                        {touched.name && errors.name && (
                            <Text style={styles.error}>{errors.name}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        {touched.name && errors.email && (
                            <Text style={styles.error}>{errors.email}</Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Celular"
                            onChangeText={handleChange("phone")}
                            onBlur={handleBlur("phone")}
                            value={values.phone}
                            keyboardType="numeric"
                        />
                        {touched.phone && errors.phone && (
                            <Text style={styles.error}>{errors.phone}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Edad"
                            onChangeText={handleChange("age")}
                            onBlur={handleBlur("age")}
                            value={values.age}
                            keyboardType="numeric"
                        />
                        {touched.age && errors.age && (
                            <Text style={styles.error}>{errors.age}</Text>
                        )}

                        <View style={styles.pickerContainer}>
                            <Text style={styles.labelPicker}>Género:</Text>
                            <Picker
                                selectedValue={values.gender}
                                style={styles.picker}
                                onValueChange={(itemValue) =>
                                    setFieldValue("gender", itemValue)
                                }
                            >
                                <Picker.Item label="Varón" value="male"/>
                                <Picker.Item label="Mujer" value="female"/>
                                <Picker.Item label="No especificar" value="NO ESPECIFICAR"/>
                            </Picker>
                        </View>

                        <View style={styles.pickerContainer}>
                            <Text style={styles.labelPicker}>Tipo de Membresía:</Text>
                            <Picker
                                selectedValue={values.membershipType}
                                style={styles.picker}
                                onValueChange={(itemValue) =>
                                    setFieldValue("membershipType", itemValue)
                                }
                            >
                                <Picker.Item label="Diario" value="daily"/>
                                <Picker.Item label="Interdiario" value="every-other-day"/>
                                <Picker.Item label="Mensual" value="weekly"/>
                            </Picker>
                        </View>

                        {touched.gender && errors.gender && (
                            <Text style={styles.error}>{errors.gender}</Text>
                        )}

                        {touched.membershipType && errors.membershipType && (
                            <Text style={styles.error}>{errors.membershipType}</Text>
                        )}

                        {/* Botón personalizado */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212", // Fondo oscuro
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 10,
        tintColor: "#FFFFFF", // Color del logo blanco
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF", // Color del texto blanco
    },
    form: {
        width: "100%",
    },
    input: {
        height: 40,
        width: "100%",
        backgroundColor: "#333333", // Fondo del input oscuro
        color: "#FFFFFF", // Color del texto blanco
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 6,
    },
    pickerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    labelPicker: {
        fontSize: 16,
        width: "40%", // Ancho fijo para el texto del label
        color: "#FFFFFF", // Color del texto blanco
    },
    picker: {
        flex: 1,
        height: 40,
        backgroundColor: "#333333", // Fondo del picker oscuro
        color: "#FFFFFF", // Color del texto blanco
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    button: {
        backgroundColor: "#4CAF50", // Color de fondo verde
        borderRadius: 6,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#FFFFFF", // Color del texto blanco
        fontSize: 18,
        fontWeight: "bold",
    },
    error: {
        color: "#FF6347", // Color rojo para errores
        marginBottom: 10,
    },
});

export default MembershipsEditScreen;

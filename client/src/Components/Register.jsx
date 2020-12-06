import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

export default function Register({navigation}){
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', repeatPassword: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
                <Text style={{marginTop: 15}}>Nombre</Text>
                <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                />
                 <Text style={{marginTop: 15}}>Email</Text>
                <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                />
                 <Text style={{marginTop: 15}}>Contraseña</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                />
                <Text style={{marginTop: 15}}>Repite la Contraseña</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={handleChange('repeatPassword')}
                onBlur={handleBlur('repeatPassword')}
                value={values.repeatPassword}
                />
                <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                    <Text style={{fontWeight: 'bold'}}>Registrarme</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 15}} onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontWeight: 'bold'}}>Ya tenes cuenta? Inicia Sesion</Text>
                </TouchableOpacity>
               
            </View>
            )}
        </Formik>
    )
}


//estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'yellow',
      height: 30,
      width: '70%',
      marginTop: 5
  },
  boton: {
      backgroundColor: 'yellow',
      borderRadius: 15,
      height: 30, 
      width: '70%',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15
  }

});

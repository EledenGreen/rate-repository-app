import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'

import theme from '../theme'

const initialValues = {
  username: '',
  password: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.input,
            formik.errors.username && formik.touched.username
              ? styles.inputError
              : null,
          ]}
          placeholder="username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.error}>{formik.errors.username}</Text>
        )}
        <TextInput
          style={[
            styles.input,
            formik.errors.password && formik.touched.password
              ? styles.inputError
              : null,
          ]}
          placeholder="password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}

        <Button title="Submit" onPress={formik.handleSubmit}></Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: theme.fontSizes.body,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  error: {
    color: theme.colors.error,
    marginTop: -10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', // blue background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default SignIn

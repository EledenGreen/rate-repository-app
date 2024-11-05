import { Button, Pressable, StyleSheet, TextInput, View } from 'react-native'
import Text from './Text'
import { useFormik } from 'formik'
import theme from '../theme'

const initialValues = {
  username: '',
  password: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
        />
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

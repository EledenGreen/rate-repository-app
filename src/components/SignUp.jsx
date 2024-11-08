import * as yup from 'yup'
import { useFormik } from 'formik'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import theme from '../theme'
import { ME } from '../graphql/queries'
import { useNavigate } from 'react-router-native'
import useSignIn from '../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required')
    .min(1)
    .max(30)
    .lowercase()
    .trim(),
  password: yup.string().required('password is required').min(5).max(50).trim(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'password does not match')
    .required('Required'),
})

const SignUp = () => {
  const navigate = useNavigate()

  const [createUser] = useMutation(CREATE_USER)
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await createUser({
        variables: {
          username,
          password,
        },
      })
      console.log('user created: ', data.createUser.username)
      const { data: dataSignIn } = await signIn({ username, password })
      console.log(dataSignIn.authenticate.accessToken)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

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
        {formik.errors.username && formik.touched.username && (
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
        {formik.errors.password && formik.touched.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}
        <TextInput
          style={[
            styles.input,
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? styles.inputError
              : null,
          ]}
          placeholder="confirm password"
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange('confirmPassword')}
          secureTextEntry
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <Text style={styles.error}>{formik.errors.confirmPassword}</Text>
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

export default SignUp

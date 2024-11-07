import * as yup from 'yup'
import { useFormik } from 'formik'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import theme from '../theme'
import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'
import { ALL_REPOSITORIES } from '../graphql/queries'
import { useNavigate } from 'react-router-native'

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
}

const validationSchema = yup.object().shape({
  repositoryName: yup
    .string()
    .required('repo name required')
    .lowercase()
    .trim(),
  ownerName: yup.string().required('owner name required').lowercase().trim(),
  rating: yup.number().integer().min(0).max(100).required('rating required'),
  text: yup.string().max(2000).trim(),
})

// createReview is only rendered when a user is signed in. checked at AppBarTab.jsx
const CreateReview = () => {
  // define onSubmit before formik
  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values

    try {
      createReview({
        variables: {
          repositoryName,
          ownerName,
          rating,
          text,
        },
      })
    } catch (e) {
      console.log(e)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const [createReview, result] = useMutation(CREATE_REVIEW, {
    refetchQueries: [{ query: ALL_REPOSITORIES }],
  })

  return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.input,
            formik.errors.repositoryName && formik.touched.repositoryName
              ? styles.inputError
              : null,
          ]}
          placeholder="repositoryName"
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange('repositoryName')}
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text style={styles.error}>{formik.errors.repositoryName}</Text>
        )}
        <TextInput
          style={[
            styles.input,
            formik.errors.ownerName && formik.touched.ownerName
              ? styles.inputError
              : null,
          ]}
          placeholder="ownerName"
          value={formik.values.ownerName}
          onChangeText={formik.handleChange('ownerName')}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <Text style={styles.error}>{formik.errors.ownerName}</Text>
        )}
        <TextInput
          style={[
            styles.input,
            formik.errors.rating && formik.touched.rating
              ? styles.inputError
              : null,
          ]}
          placeholder="rating"
          value={formik.values.rating ? String(formik.values.rating) : ''}
          onChangeText={(value) => {
            const intValue = parseInt(value, 10)
            if (!isNaN(intValue)) {
              formik.setFieldValue('rating', intValue)
            } else {
              formik.setFieldValue('rating', '')
            }
          }}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text style={styles.error}>{formik.errors.rating}</Text>
        )}
        <TextInput
          style={[
            styles.input,
            formik.errors.text && formik.touched.text
              ? styles.inputError
              : null,
          ]}
          placeholder="text"
          value={formik.values.text}
          onChangeText={formik.handleChange('text')}
        />
        {formik.touched.text && formik.errors.text && (
          <Text style={styles.error}>{formik.errors.text}</Text>
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

export default CreateReview

import Layout from './Layout';
import {Button, Text, TextInput, View} from 'react-native';
import { Formik } from 'formik';
import {StyledTextInput} from './StyledTextInput';

const initialValues = {
  email: '',
  password: ''
}

export default function TestingPage () {

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Layout>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        { ({ handleSubmit }) => (
         <View>
           <StyledTextInput
             placeholder='email'
             name='email'
             required
           />
           <StyledTextInput
             placeholder='password'
             name='password'
             required
           />
           <Button
             onPress={handleSubmit}
             title='Login'
           />
         </View>
        )}
      </Formik>
    </Layout>
  )
}

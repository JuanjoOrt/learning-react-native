import React from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'
import {useField, useFormikContext} from 'formik';

export function StyledTextInput ({name, required, validate, ...rest}) {
  const { submitCount } = useFormikContext()
  const validation = (required && !validate) ? validateRequired : validate
  const [field, meta, helpers] = useField({ name, validate: validation, ...rest })
  const showError = submitCount > 0 && meta.error
  const handleChange = (newValue) => helpers.setValue(newValue)

  return (
    <View>
      <TextInput
        style={styles.input}
        value={field.value}
        name={field.name}
        onChangeText={handleChange}
        {...rest}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  errorText: {
    color: '#bb2424',
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export const validateRequired = (value) => {
  let error
  if (!value || (typeof (value) === 'string' && value.trim() === '')) {
    error = 'Este campo es obligatorio.'
  }
  return error
}



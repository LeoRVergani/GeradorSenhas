import { useState } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import {ModalPassord} from './src/components/modal'

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

export default function App() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [modalVisible, setMoralVisible] = useState(false)

  function generatePassword(){
    
    let password = '';

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    
    setPasswordValue(password)
    setMoralVisible(true)

  }



  return(
    <View style={styles.container}>
      <Image 
        source={require('./src/assets/logo.webp')}
        style={styles.logo}
      />

      <Text style={styles.title}> {size} Caracteres </Text>
      <View style={styles.area}>
        <Slider 
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassord password={passwordValue} handleClose={ () => setMoralVisible(false) } />

      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 50,
    width: 250,
    height: 250
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6
  },
  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    flex:1,
    color: '#FFF',
    fontSize: 30,
    height: '100%',
    marginTop: 5
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }

})
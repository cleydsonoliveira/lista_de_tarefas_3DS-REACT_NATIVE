import { KeyRound, Mail } from 'lucide-react-native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function app() {
  return (
    <View style={styles.containerBody}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.textBemVindo}>Bem vindo de Volta!</Text>
      </View>
      <View style={styles.viewForm}>
        <View>
            <Text style={styles.textForm}>Email</Text>
            <View style={styles.iconBlock}>
              <TextInput
                style={styles.input}
                placeholder=''
              />
              <Mail style={styles.icone} />
            </View>
        </View>
        <View>
          <View>
            <Text style={styles.textForm}>Senha</Text>
            <View style={styles.iconBlock}>
              <TextInput
                style={styles.input}
                placeholder=''
              />
              <KeyRound style={styles.icone} />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View>
          <TouchableOpacity style={styles.btnEnviar}>
            <Text style={styles.textEntrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#d7d8d7',
    borderRadius: 20
  },
  textBemVindo: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  viewForm: {
    flex: 1,
    paddingHorizontal: 15
  },
  textForm: {
    fontSize: 19,
    color: '#d7d8d7'
  },
  icone: {
    position: 'absolute',
    right: 15,
    color: '#708070'
  },
  iconBlock:{
    justifyContent: 'center'
  },
  textEntrar:{
    fontSize: 22,
    color: '#fff'
  },
  btnEnviar:{
    backgroundColor: '#878af6'
  }
})
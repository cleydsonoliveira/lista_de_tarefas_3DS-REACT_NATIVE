import { Search } from 'lucide-react-native';
import { Text, TextInput, View } from 'react-native';

export default function Tela2() {

  return (
    <View>
      <View>
        <View>
          <Text>Bem vindo, Nome.</Text>
        </View>
        <View>
          <Search />
          <TextInput />
        </View>
      </View>
      <View></View>
    </View>
  );
}
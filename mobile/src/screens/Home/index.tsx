import { Background } from 'components/Background';
import { Header } from 'components/Header';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <Background>
        <Header />
        <View style={styles.container}>
            <Text style={styles.text}> Home </Text>
        </View>
    </Background>
  );
}
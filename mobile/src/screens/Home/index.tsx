import { Background } from 'components/Background';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <Background>
        <View style={styles.container}>
            <Text style={styles.text}> Home </Text>
        </View>
    </Background>
  );
}
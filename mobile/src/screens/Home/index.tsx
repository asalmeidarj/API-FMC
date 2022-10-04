import { Background } from 'components/Background';
import { Header } from 'components/Header';
import { Notification } from 'components/Notification';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <Background>
        <Header />
        <Notification />
        <View style={styles.container}>
        </View>
    </Background>
  );
}
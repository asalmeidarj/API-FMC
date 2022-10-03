import { Text, View } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <View></View>
        <View style={styles.navigation}>
            <View>
                <Text style={styles.itemNavigation}> Novas Notificações </Text>
            </View>
            <View>
                <Text style={styles.itemNavigation}> Todas </Text>
            </View>
        </View>
        <Text>Header</Text>
    </View>
  );
}
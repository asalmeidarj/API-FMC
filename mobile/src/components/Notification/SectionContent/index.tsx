import { Text, View } from 'react-native';

import { styles } from './styles';

export function SectionContent() {
  return (
    <View style={styles.container}>
        <View style={styles.sectionTop}>
            <Text style={styles.infoTop}>Auto Mil</Text>
            <Text style={styles.infoTop}> há 14 min</Text>
        </View>
        <View style={styles.sectionTitle}>
            <Text style={styles.title}>Lead Time Gerado!</Text>
        </View>
        <View>
            <Text 
                style={styles.message}
                numberOfLines={2}
            >
                O produto óleo de motor está com 4 unidades em nosso
                estoque para previnir a falta no estoque já pode ser enviado
                uma ordem de compra
            </Text>
        </View>
        
    </View>
  );
}
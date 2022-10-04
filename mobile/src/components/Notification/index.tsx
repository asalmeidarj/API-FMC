import { View } from 'react-native';
import { SectionContent } from './SectionContent';
import { SectionIcon } from './SectionIcon';

import { styles } from './styles';

export function Notification() {
    return (
        <View>
            <View style={styles.container}>
                <SectionIcon />
                <SectionContent />
            </View>
            <View style={styles.container}>
                <SectionIcon />
                <SectionContent />
            </View>
            <View style={styles.container}>
                <SectionIcon />
                <SectionContent />
            </View>
            <View style={styles.container}>
                <SectionIcon />
                <SectionContent />
            </View>
            <View style={styles.container}>
                <SectionIcon />
                <SectionContent />
            </View>
        </View>

    );
}
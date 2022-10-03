import { Background } from 'components/Background';
import { StatusBar } from 'react-native';
import { Text } from 'react-native';

export default function App() {
  return (
    <Background>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      
    </Background>
  );
}

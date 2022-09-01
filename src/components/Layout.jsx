import {View} from 'react-native';
import AppBar from './AppBar';


export default function Layout ({ children, navigation }) {
  return (
    <View style={{flex: 1}}>
      <AppBar navigation={navigation}/>
      <View style={{flex: 1}}>
        {children}
      </View>
    </View>
  )
}

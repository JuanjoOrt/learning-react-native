import {View} from 'react-native';
import AppBar from './AppBar';


export default function Layout ({ children, navigation, style }) {
  return (
    <View style={{flex: 1}}>
      <AppBar navigation={navigation}/>
      <View style={[{flex: 1}, style]}>
        {children}
      </View>
    </View>
  )
}

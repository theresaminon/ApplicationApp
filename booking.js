import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
} from 'react-native';


const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  tx: {
      fontSize: 20,
      backgroundColor: 'green'
  }
});

export default function Appment({ navigation }) {
    return (
        <View style={styles.cont}>
            <Text style={styles.tx}>
                you are about to book an appointment with :
                { navigation.getParam('name') }
                
            </Text><Text></Text>
            <Text style={styles.tx}>
                Call the number :
                { navigation.getParam('phone_no') }
            </Text>
        </View>
    )
}
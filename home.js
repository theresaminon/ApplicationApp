import React from 'react';
import { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    paddingTop: 35,
    
  },
  
  imgTxt: {
      fontSize: 25,
  },
  item: {
    backgroundColor: 'grey',
    fontSize: 20,
    flex: 1,
    marginTop: 10,
    padding: 30,
    
  },
});



export default function Home ({ navigation }) {
    
    const [jewellers, setJewellers] = useState([
        { name: 'Mary', phone_no:1111111, key: '1' },
        { name: 'Suzan', phone_no:2222222, key: '2' },
        { name: 'Paula', phone_no:3333333, key: '3' },
        { name: 'Theresa', phone_no:444444, key: '4' },
        { name: 'Brian', phone_no:5555555, key: '5' },
    ]);

    return (
      <View style={styles.cont}>
        <ScrollView>
            <Image
                source={require('./assets/src/asdsad854.jpg')}
            />
            <Text style={styles.imgTxt}>
                Piece done by Mary
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/src/dsadwa1.jpg')}
            />
            <Text style={styles.imgTxt}>
            Piece done by Suzan
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/src/dsae12.jpg')}
            />
            <Text style={styles.imgTxt}>
            Piece done by Paula
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/src/nckl23.jpg')}
            />
            <Text style={styles.imgTxt}>
            Piece done by Theresa
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/src/s-l300.jpg')}
            />
            <Text style={styles.imgTxt}>
            Piece done by Brian
            </Text>
            <Text></Text><Text></Text>
            <Text style={styles.imgTxt}>
            You can book an appointment by choosing the name of the Jeweller below
            </Text>
            <FlatList
                data={jewellers}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BookAppointment', item)}>
                    <Text style={styles.item}>
                        {item.name}
                    </Text>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
      </View>
    );

}
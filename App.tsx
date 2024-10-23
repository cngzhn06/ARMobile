import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          ARTIRILMIŞ GERÇEKLİK UYGULAMASI
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
});

export default App;

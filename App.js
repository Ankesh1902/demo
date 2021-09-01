import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';
import DisplayProduct from './src/screens/DisplayProduct'; 
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    
} from 'react-native';
import {Button, Text,Searchbar} from 'react-native-paper'
import {styles} from './src/css/CommonCss'
import { useSelector } from 'react-redux'; 
const App=(props)=>{


    return (
<View style={ [styles.root]}>
<Searchbar
      placeholder="Search"
    />
  <React.Fragment>
  <DisplayProduct></DisplayProduct>
  </React.Fragment>
  {/* <View style={{width:50,backgroundColor:'pink'}}>
 <QRCode 
      value={JSON.stringify(this.state.data)}
      size="1500"
/> 
</View> */} 
<View style={{
  width: '100%',
  height: 50,
  backgroundColor: '#EE5407',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0
}}>
     <Button>sd</Button>
        </View>

      </View>
    );
  };

 
export default App
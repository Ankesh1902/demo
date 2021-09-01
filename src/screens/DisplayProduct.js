import React from 'react'
import {ScrollView, View,Image} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { styles } from '../css/CommonCss'
import { StyleSheet } from 'react-native'
import { Button, Surface ,Text,IconButton,Colors} from 'react-native-paper'
import {plus,camera} from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { addToCart } from '../state/actions/CartActions'
import { bindActionCreators } from 'redux';
const DisplayProduct=(props)=>{
  const    data=[{
    "productId":"123f",
    "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSoxEbFv8lMvahoL3b92P_B3waSuUb1S36ot9xxGtM4QLUqxXrVo-Lrv-xjWj8m7B70vs4A8nDsznPlc6hci-x4jUkPjDqvpg",
    "desc":"Patanajali aata 5 kg",
    "quantity":10,
    "price":200,
    "cart_quantity":0
  },
  {
    "productId":"456f",
    "image":"https://cdn.shopify.com/s/files/1/0173/7644/4470/products/40127505-2_0bc93e18-7167-4ba8-811c-9342bf2e75fa_compact.jpg?v=1626069887",
        "desc":"Patanajali aata 10 kg",
    "quantity":10,
    "price":200,
    "cart_quantity":0
  }]
    return(
        <ScrollView>
        <View style={[{flex:1}]}>
            {/* <QRCode 
      value="data of everything"
      size={300}
/>  */}
{props.items.map((element) => 
    

 <Surface style={styless.surface}>
  <View style={{flex:0.8,height: 80,
    width: 80,}}>
<Image source = {{uri:element.image}}
   style = {{ width: 80, height: 80 }}
   />
  </View>
  <View style={{flex:1.5, height: 'auto',justifyContent:'center',
    width: '100%'}}>
<Text style={{flex:1.5,flexWrap:'wrap',fontSize:16,paddingRight:2}}>{element.desc}</Text>
 <Text>Quantity:{element.quantity}</Text>
 <Text>Price: {element.quantity}</Text>
{/* <Text style={{flex:2,flexWrap:'wrap',fontSize:16}}>Hari hara pavan koushik tekuru jiska naam prateek hai</Text> */}
</View>

<View style={{flex:1,height:'auto', flexDirection:'row',alignContent:'center',justifyContent:'space-evenly',width: '100%'}}>
{element.quantity>0 ?
<>
<Button icon="minus" onPress={()=>alert("prateek minus pressed")}>
</Button>
<Text style={{alignSelf:'center'}}>{element.quantity}</Text>
<Button icon="plus" onPress={()=>props.addToCart(element)}> </Button>
</>
:<Button onPress={()=>props.addToCart(element)}>Add</Button>}
</View>


</Surface>
)}
        </View>
        </ScrollView>
    )
}
const styless = StyleSheet.create({
    surface: {
        flexDirection:'row',
      padding: 6,
      height: 'auto',
      minWidth: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      elevation: 4,
      margin:4    },
      tinyLogo: {
        width: 50,
        height: 50,
      },
  });
  const mapStateToProps = (props)=>{
    return {
      items: props.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (product)=>{dispatch(addToCart(product))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayProduct)
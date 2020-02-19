import React from 'react';
import { StyleSheet, Button,Text, View, Image } from 'react-native';

export default function App() {
  return (
    // Container view 
    <View style={styles.container}>
      {/* container for logo and text */}
      <View style={{justifyContent:'center',alignItems:'center',height:150, flex:6}}> 
       {/* //view for the logo */}
       <View  style={{flexDirection:'row',height:100,justifyContent:"space-between",alignItems:"center",width:250}}>
            {/* //logo */}
            <View style={{width:50,height:50,borderRadius:10}}> 
            <Image source={require('./assets/images/icon.jpg')} style={{width:70,height:70,borderRadius:100}}/>
            </View>
            {/* //Text */}
            <View style={{justifyContent:'center',alignItems:'center',height:50}}>
              <Text style={{fontWeight:'bold',fontSize:50}}>Blinkist</Text>
            </View>

       </View>
       {/* view for the text */}
      <View style={{width:300}}>
            <Text style={{textAlign:'center',fontSize:16}}>
              Key takeaways from the world's best nonfiction books in 15 minutes
            </Text>
       </View>
      </View>
      {/* container for logo thems */}
      <View  style={{flex:2,alignItems:"center", justifyContent:'center'}}>
        {/* view for nav */}
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:30}}>
           <View style={{borderWidth:0.3,height:10,width:10,backgroundColor:'#69c934',borderRadius:10,margin:5,borderColor:'#aaa'}}></View>
           <View style={{borderWidth:0.3,height:10,width:10,backgroundColor:'#aaa',borderRadius:10,margin:5,borderColor:'#aaa'}}></View>
           <View style={{borderWidth:0.3,height:10,width:10,backgroundColor:'#aaa',borderRadius:10,margin:5,borderColor:'#aaa'}}></View>
           <View style={{borderWidth:0.3,height:10,width:10,backgroundColor:'#aaa',borderRadius:10,margin:5,borderColor:'#aaa'}}></View>
        </View>

       {/* view for button */}
          <View style={{width:300, flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{borderWidth:0.3,backgroundColor:"#fff", borderColor:'#aaa',width:140,height:40,alignItems:'center', justifyContent:'center',borderRadius:5}}>
              <Text style={{color:'#69c934'}}>Log In</Text>
            </View>
            <View style={{borderWidth:0.3,backgroundColor:"#69c934", borderColor:'#aaa',width:140,height:40,alignItems:'center', justifyContent:'center',borderRadius:5}}>
               <Text style={{color:'#fff'}}>Get Started</Text>
            </View>
         </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop:50
  },
  
});

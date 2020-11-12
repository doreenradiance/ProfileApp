import React from 'react';
import { StyleSheet, Text, View, Button, Image,TouchableOpacity  } from 'react-native';


const AppButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
)

function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/dp.jpg')} style={styles.image} />

      <View style={styles.school}>
        <Text style={styles.label1}>School</Text>
        <Text style={styles.info1}>The Lawrenceville School</Text>
      </View>

      <View style={styles.email}>
        <Text style={styles.label2}>Email Address</Text>
        <Text style={styles.info1}>danielrozar@gmail.com</Text>
      </View>

      <View style={styles.name}>
        <Text style={styles.label3}>Name</Text>
        <Text style={styles.info}>Daniel Rozar</Text>
      </View>

      <View style={styles.nickname}>
        <Text style={styles.label4}>Nickname</Text>
        <Text style={styles.info}>r.denial</Text>
      </View>

      <View style={styles.contact}>
        <Text style={styles.label5}>Emergency Contact</Text>
        <Text style={styles.info}>+1-987654321</Text>
      </View>

     <AppButton
        onPress={() => alert('Hello Native')}
        title="Update Profile"
        buttonStyle={styles.btn} 
        textStyle={styles.btnText} 
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  }, 

  image: {
    marginTop: 80,
    marginBottom:20,
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 40,
  },

  info1:{
fontWeight:'bold'
  },

school:{
  marginBottom:10
},
email:{
  marginTop:10,
  marginBottom:10,
},
name:{
  marginTop:10,
  marginBottom:10,
},
nickname:{
  marginTop:10,
  marginBottom:10,
},
contact:{
  marginTop:10,
  marginBottom:30,
},

  label1:{
    fontSize:25,
    color:'grey'
  },
  label2:{
    fontSize:25,
    color:'grey',
  },
  label3:{
    fontSize:25,
    color:"#27b4e4"
  },
  label4:{
    fontSize:25,
    color:"#27b4e4"
  },
  label5:{
    fontSize:25,
    color:"#27b4e4",
    marginTop:10
  },

  info:{
   fontWeight:"bold",
   fontSize:20,
   borderBottomWidth:1
  },

  btn: {
    borderRadius: 50,
    backgroundColor:'#27b4e4',
    height:50
  },

  btnText:{
    color:"white",
    alignSelf:'center',
    marginTop:15
  }

 
});

export default App;

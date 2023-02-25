import { useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CustomRatingBar } from './CustomRatingBar';
import { FormTextInput } from './FormTextInput';
import { RoundedButton } from './RoundedButton';
import axios from 'axios';
import { useToggle } from './hooks/useToggle';

export default function FeedBack({navigation}) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const maxRating = useRef([1, 2, 3, 4, 5]);
  const [rating, setRating] = useState(2);
  const [anythingToAdd, setAnythingToAdd] = useState("");
  const [axiosResponse, setaxiosResponse] = useState("init");
  const feedbackData = { anythingToAdd, rating }


  const sendData = () => {
    axios.post(" http://192.168.100.43:4000/feedbacks", feedbackData, { headers: { "Content-Type": "application/json" }, "Accept": "application/json" })
      .then((response) => {
        setaxiosResponse(response.data);
        setButtonClicked(true);
      })
      .catch((error) => {
        console.log(error);
        setaxiosResponse("a problem occured while submitting we will ask you for your feedback later sorry for the inconvenience");
        setButtonClicked(true);
      })};

  useToggle(buttonClicked, setButtonClicked);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#607045'}}>
    
     <View
     style={styles.firstView}>
        <Text style={{ fontSize: 40,fontWeight: 'bold',color:'white', paddingTop:24}}>
          Feedback
        </Text>
        
        <Text style={{ fontSize: 20,fontWeight: 'bold',color:'white'}}>
          How satisfied are you with the app 
          </Text>
          </View >

          <View style={styles.ratingView}>
            <CustomRatingBar maxRating={maxRating.current}
              rating={rating}
              setRate={rating => setRating(rating)} />
            </View>
           <View style={styles.formView}>
            <FormTextInput
              multiline={true}
              onChangeContent={anythingToAdd => setAnythingToAdd(anythingToAdd)}
            />
         </View >
        
         <View style={styles.buttonView}> 
          <RoundedButton
            title={"Envoyer"}
            onClicked={() => sendData()}
          />
          {buttonClicked ? <Text style={{ color: color.white }}>{axiosResponse}</Text> : null}
        </View>

      

     
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 firstView: {
  alignItems: "center",
  flex:3,backgroundColor:"#607045"
 },
 ratingView: {

  flex:2,borderTopLeftRadius:30,borderTopRightRadius:30
  ,backgroundColor:'white'
 
 },
 buttonView: {
  flex:3,
  alignItems: 'center',
  backgroundColor:'white',
  
 },
 formView:{
 flex:7,
 backgroundColor:'white',

 }

  
});


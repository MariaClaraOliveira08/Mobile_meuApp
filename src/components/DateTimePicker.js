import React, { useState } from "react";
import { View,Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const DateTimePickerDefault = ({type, buttonTitle, dateKey, setValue})=>{
    const[isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker=()=>{
        setDatePickerVisibility(true);
    }
    const hideDatePicker=()=>{
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date)=>{
        if(type==="time"){
            const hour = date.getHours();
            const minute = date.getMinutes();
            const formattedTime = `${hour}:${minute}`;
            setValue((prevState)=> ({
                // mantem o estado que esta armazenado
                ...prevState, 
                //date: 07:00
                [dateKey]: formattedTime 
            }))
        }else{
            setValue((prevState)=> ({
                // mantem o estado que esta armazenado
                ...prevState, 
                //date: aaaa:mm:dd
                [dateKey]: date, 
            }))
        }
        hideDatePicker();
    }

    return(
        <View>
            <Button title={buttonTitle} onPress={showDatePicker} color="#ecd4e9"/>
            <DateTimePicker
            isVisible={isDatePickerVisible}
            mode={type}
            locale="pt_BR"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            pickerContainerStyleIOS={{backgroundColor:"#fff"}}
            textColor="#000"
            />
        </View>
    )
};
export default DateTimePickerDefault;
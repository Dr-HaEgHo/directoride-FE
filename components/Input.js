import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { EyeSlash } from 'iconsax-react-native'
import { COLORS } from '../constants'

const Input = ({
    label, 
    iconName,
    error,
    password,
    visible,
    onFocus = () => { },
    ...props
}) => {

    const [hidePassword, setHidePassword] = useState(password)

    useEffect(() => { 
        if (visible === true) {
            setHidePassword(!password)
        } else {
            setHidePassword(password)
        }
    }, [visible])

  return (
    <View>
      <Text
        style={{
          width: "100%",
          textAlign: "left",
          color: COLORS.black,
          fontSize: 14,
          fontFamily: "popReg",
          marginBottom: 8,
        }}
      >
        {label}
      </Text>
      <View
        style={{
                  width: "100%",
                  alignItems: "flex-end",
                  justifyContent: "center",
        }}
      >
        {iconName}
              
        <TextInput
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: COLORS.textGrayLight,
            borderRadius: 5,
            paddingHorizontal: 8,
            paddingVertical: 16,
            fontSize: 16,
                      fontFamily: "popReg",
            zIndex: 0
          }} 
          placeholder={props.placeholder}
          secureTextEntry={hidePassword}
        />
      </View>
      <Text>{error}</Text>
    </View>
  );
}

export default Input
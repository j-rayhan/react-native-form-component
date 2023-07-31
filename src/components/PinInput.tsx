import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleProp,
  TextInputProps,
} from 'react-native';

import { colors } from '../colors';
import FormItem from './FormItem';

// Define the prop types for the PinInput component
interface Props extends TextInputProps {
  numOfInput: number;
  onChangeText: (pin: string) => void;
  textInputStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
}

// Create an array of refs to store the TextInput refs
const refs: React.RefObject<TextInput>[] = [];

export default function PinInput(props: Props) {
  // Set up state for the pin input and active input index
  const [pin, setPin] = React.useState(Array(props.numOfInput).fill(''));
  const [activeInput, setActiveInput] = React.useState(0);

  // Initialize the refs array if it is empty
  if (!refs.length) {
    for (let i = 0; i < pin.length; i++) {
      refs.push(React.createRef());
    }
  }

  // Function to change focus between input fields
  const changeFocus = (index: number, text: string) => {
    if (text) refs[index + 1]?.current?.focus();
    else refs[index - 1]?.current?.focus();
  };

  return (
    <View style={[styles.wrapper, props.style]}>
      {/* Render the PinInput fields */}
      {pin.map((_, index) => (
        <FormItem
          {...props}
          value={pin[index]}
          style={styles.formItem}
          onChangeText={(text) => {
            // Update the pin array with the new input value
            pin[index] = text;
            setPin([...pin]);
            // Change focus based on the input value
            changeFocus(index, text);
            // Call the onChangeText callback with the concatenated pin value
            props.onChangeText(pin.toString().replace(/,/g, ''));
          }}
          textInputStyle={[
            styles.input,
            {
              // Set the borderBottomColor based on the active input index
              borderBottomColor:
                activeInput === index ? colors.black : colors.lightgrey,
            },
            props.textInputStyle,
          ]}
          maxLength={1}
          key={index}
          ref={refs[index]}
          onFocus={() => setActiveInput(index)}
          customValidation={() => ({ status: true, message: '' })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    maxWidth: 40,
    borderBottomWidth: 1.5,
    textAlign: 'center',
    fontSize: 20,
  },
  formItem: {
    backgroundColor: 'transparent',
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: 40,
  },
});

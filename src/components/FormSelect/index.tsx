import { MotiImage } from 'moti';
import React from 'react';
import {
  Animated,
  Easing,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import { COLORS, FONTS, icons, SIZES, styles } from '../constants';

const AnimatedImage = ({ isOption }: { isOption: boolean }) => {
  const scaleXValue = new Animated.Value(1);

  React.useEffect(() => {
    // Use Animated.timing to animate the scaleXValue based on options.length
    Animated.timing(scaleXValue, {
      toValue: isOption ? -1 : 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [isOption]);

  return (
    <View>
      {/* Apply the scaleX transform to the image using the Animated.Image component */}
      <Animated.Image
        source={icons.add}
        resizeMode="contain"
        style={{
          // marginRight: SIZES.radius,
          tintColor: COLORS.black,
          width: 14,
          height: 14,
          transform: [{ scaleX: scaleXValue }],
        }}
      />
    </View>
  );
};

interface IFormSelectSearch {
  label: string | number | undefined;
  errorMsg: string | undefined;
  placeholder?: string | undefined;
  value: object | null;
  options: object[];
  setSelected?: () => void;
  clearFilteredOptions?: () => void;
  onBlur?: () => void;
  suggestionsHandler?: () => void;
  inputContainerStyle?: ViewProps['style'];
  autocompleteContainerStyle?: ViewProps['style'];
  containerStyle?: ViewProps['style'];
  prependComponent?: React.ReactNode;
  appendComponent?: React.ReactNode;
}
function FormSelectSearch(props: IFormSelectSearch) {
  const {
    label,
    errorMsg,
    placeholder,
    value,
    options,
    setSelected,
    clearFilteredOptions,
    onBlur,
    suggestionsHandler,
    inputContainerStyle,
    autocompleteContainerStyle,
    containerStyle,
    prependComponent,
    appendComponent,
  } = props;
  const inputRef = React.useRef(null);
  const listStyle = React.useMemo(
    () =>
      options?.length > 0
        ? {
            // height: 150,
            paddingVertical: SIZES.base,
            borderColor: COLORS.black07,
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 1,
          }
        : {},
    [options]
  );
  return (
    <View style={{ ...containerStyle }}>
      {/* Label & Error massage */}
      {(label.length > 0 || errorMsg.length > 0) && (
        <View style={{ ...styles.rowSpread, marginBottom: SIZES.tiny }}>
          <Text style={{ ...FONTS.body4 }}>{label}</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.red }}>{errorMsg}</Text>
        </View>
      )}
      {/* Input Container */}
      <View
        style={[
          {
            // flex: 1,
            flexDirection: 'row',
            height: SIZES.height > 700 ? 55 : 45,
            borderRadius: SIZES.tiny,
            backgroundColor: COLORS.white,
            borderWidth: 1,
            borderColor: COLORS.black07,
          },
          inputContainerStyle,
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            right: 0,
            top: 0,
            left: 0,
            zIndex: 1,
            ...autocompleteContainerStyle,
          }}
        >
          {prependComponent}
          {/* input box */}
          <AutocompleteInput
            data={options}
            containerStyle={{
              width: '100%',
              ...styles.center,
              // backgroundColor: COLORS.black20,
            }}
            inputContainerStyle={{
              width: '100%',
              height: SIZES.height > 700 ? 52 : 42,
              borderRadius: SIZES.tiny,
              flexDirection: 'row',
              marginLeft: -SIZES.radius,
              borderWidth: 0,
              // backgroundColor: COLORS.black20,
            }}
            listContainerStyle={{
              width: '100%',
              backgroundColor: COLORS.white,
              ...listStyle,
              ...styles.shadow,
              // paddingVertical: SIZES.padding,
              // zIndex: 1,
            }}
            flatListProps={{
              keyExtractor: (_, idx) => idx,
              renderItem: ({ item }) => (
                // console.log('PRINT IN %s=====>', 'TestFormField START ***', item);
                // For the suggestion view
                <Pressable
                  style={{
                    ...styles.dropdownRowStyle,
                    // paddingHorizontal: SIZES.padding,
                    // paddingVertical: SIZES.radius,
                    // backgroundColor: COLORS.secondary,
                    // margin: SIZES.tiny,
                  }}
                  onPress={() => {
                    setSelected(item);
                    clearFilteredOptions();
                  }}
                >
                  <Text style={styles.dropdownRowTxtStyle}>{item.label}</Text>
                </Pressable>
              ),
            }}
            renderTextInput={() => (
              <TextInput
                ref={inputRef}
                autoCapitalize="none"
                autoCorrect={false}
                // clearButtonMode='while-editing'
                placeholder={placeholder}
                style={{
                  width: '90%',
                  // borderWidth: 1,
                  // borderColor: '#1b1b33',
                  borderTopLeftRadius: SIZES.radius,
                  borderBottomLeftRadius: SIZES.radius,
                  paddingLeft: SIZES.padding,
                  backgroundColor: 'transparent',
                  marginBottom: 2,
                  zIndex: -1,
                  ...FONTS.body4,
                  color: COLORS.black70,
                  lineHeight: 18,
                }}
                defaultValue={value?.label}
                onChangeText={suggestionsHandler}
                // onPressIn
                onBlur={onBlur}
              />
            )}
          />
          {value?.label && (
            <TouchableOpacity
              style={{
                width: 40,
                marginLeft: -48,
                height: SIZES.height > 700 ? 55 : 45,
                transform: [{ rotate: '-45deg' }],
                zIndex: 5,
                ...styles.center,
              }}
              onPress={() => {
                inputRef.current?.clear();
                setSelected({ id: undefined, label: undefined });
              }}
            >
              <MotiImage
                transition={{
                  duration: 400,
                  type: 'timing',
                }}
                animate={{
                  transform: [{ scaleX: options.length > 0 ? -1 : 1 }],
                }}
                source={icons.add}
                resizeMode="contain"
                style={{
                  // marginRight: SIZES.radius,
                  tintColor: COLORS.black,
                  width: 14,
                  height: 14,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export default FormSelectSearch;

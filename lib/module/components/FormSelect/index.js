import { MotiImage } from 'moti';
import React from 'react';
import { Animated, Easing, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';
import { COLORS, FONTS, icons, SIZES, styles } from '../constants';
const AnimatedImage = _ref => {
  let {
    isOption
  } = _ref;
  const scaleXValue = new Animated.Value(1);
  React.useEffect(() => {
    // Use Animated.timing to animate the scaleXValue based on options.length
    Animated.timing(scaleXValue, {
      toValue: isOption ? -1 : 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }, [isOption]);
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Animated.Image, {
    source: icons.add,
    resizeMode: "contain",
    style: {
      // marginRight: SIZES.radius,
      tintColor: COLORS.black,
      width: 14,
      height: 14,
      transform: [{
        scaleX: scaleXValue
      }]
    }
  }));
};
function FormSelectSearch(props) {
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
    appendComponent
  } = props;
  const inputRef = React.useRef(null);
  const listStyle = React.useMemo(() => (options === null || options === void 0 ? void 0 : options.length) > 0 ? {
    // height: 150,
    paddingVertical: SIZES.base,
    borderColor: COLORS.black07,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1
  } : {}, [options]);
  return /*#__PURE__*/React.createElement(View, {
    style: {
      ...containerStyle
    }
  }, (label.length > 0 || errorMsg.length > 0) && /*#__PURE__*/React.createElement(View, {
    style: {
      ...styles.rowSpread,
      marginBottom: SIZES.tiny
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      ...FONTS.body4
    }
  }, label), /*#__PURE__*/React.createElement(Text, {
    style: {
      ...FONTS.body4,
      color: COLORS.red
    }
  }, errorMsg)), /*#__PURE__*/React.createElement(View, {
    style: [{
      // flex: 1,
      flexDirection: 'row',
      height: SIZES.height > 700 ? 55 : 45,
      borderRadius: SIZES.tiny,
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.black07
    }, inputContainerStyle]
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      right: 0,
      top: 0,
      left: 0,
      zIndex: 1,
      ...autocompleteContainerStyle
    }
  }, prependComponent, /*#__PURE__*/React.createElement(AutocompleteInput, {
    data: options,
    containerStyle: {
      width: '100%',
      ...styles.center
      // backgroundColor: COLORS.black20,
    },

    inputContainerStyle: {
      width: '100%',
      height: SIZES.height > 700 ? 52 : 42,
      borderRadius: SIZES.tiny,
      flexDirection: 'row',
      marginLeft: -SIZES.radius,
      borderWidth: 0
      // backgroundColor: COLORS.black20,
    },

    listContainerStyle: {
      width: '100%',
      backgroundColor: COLORS.white,
      ...listStyle,
      ...styles.shadow
      // paddingVertical: SIZES.padding,
      // zIndex: 1,
    },

    flatListProps: {
      keyExtractor: (_, idx) => idx,
      renderItem: _ref2 => {
        let {
          item
        } = _ref2;
        return (
          /*#__PURE__*/
          // console.log('PRINT IN %s=====>', 'TestFormField START ***', item);
          // For the suggestion view
          React.createElement(Pressable, {
            style: {
              ...styles.dropdownRowStyle
              // paddingHorizontal: SIZES.padding,
              // paddingVertical: SIZES.radius,
              // backgroundColor: COLORS.secondary,
              // margin: SIZES.tiny,
            },

            onPress: () => {
              setSelected(item);
              clearFilteredOptions();
            }
          }, /*#__PURE__*/React.createElement(Text, {
            style: styles.dropdownRowTxtStyle
          }, item.label))
        );
      }
    },
    renderTextInput: () => /*#__PURE__*/React.createElement(TextInput, {
      ref: inputRef,
      autoCapitalize: "none",
      autoCorrect: false
      // clearButtonMode='while-editing'
      ,
      placeholder: placeholder,
      style: {
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
        lineHeight: 18
      },
      defaultValue: value === null || value === void 0 ? void 0 : value.label,
      onChangeText: suggestionsHandler
      // onPressIn
      ,
      onBlur: onBlur
    })
  }), (value === null || value === void 0 ? void 0 : value.label) && /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: {
      width: 40,
      marginLeft: -48,
      height: SIZES.height > 700 ? 55 : 45,
      transform: [{
        rotate: '-45deg'
      }],
      zIndex: 5,
      ...styles.center
    },
    onPress: () => {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.clear();
      setSelected({
        id: undefined,
        label: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(MotiImage, {
    transition: {
      duration: 400,
      type: 'timing'
    },
    animate: {
      transform: [{
        scaleX: options.length > 0 ? -1 : 1
      }]
    },
    source: icons.add,
    resizeMode: "contain",
    style: {
      // marginRight: SIZES.radius,
      tintColor: COLORS.black,
      width: 14,
      height: 14
    }
  })))));
}
export default FormSelectSearch;
//# sourceMappingURL=index.js.map
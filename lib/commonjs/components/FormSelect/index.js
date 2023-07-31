"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _moti = require("moti");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeAutocompleteInput = _interopRequireDefault(require("react-native-autocomplete-input"));
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AnimatedImage = _ref => {
  let {
    isOption
  } = _ref;
  const scaleXValue = new _reactNative.Animated.Value(1);
  _react.default.useEffect(() => {
    // Use Animated.timing to animate the scaleXValue based on options.length
    _reactNative.Animated.timing(scaleXValue, {
      toValue: isOption ? -1 : 1,
      duration: 400,
      easing: _reactNative.Easing.linear,
      useNativeDriver: true
    }).start();
  }, [isOption]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Image, {
    source: _constants.icons.add,
    resizeMode: "contain",
    style: {
      // marginRight: SIZES.radius,
      tintColor: _constants.COLORS.black,
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
  const inputRef = _react.default.useRef(null);
  const listStyle = _react.default.useMemo(() => (options === null || options === void 0 ? void 0 : options.length) > 0 ? {
    // height: 150,
    paddingVertical: _constants.SIZES.base,
    borderColor: _constants.COLORS.black07,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1
  } : {}, [options]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...containerStyle
    }
  }, (label.length > 0 || errorMsg.length > 0) && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ..._constants.styles.rowSpread,
      marginBottom: _constants.SIZES.tiny
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      ..._constants.FONTS.body4
    }
  }, label), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      ..._constants.FONTS.body4,
      color: _constants.COLORS.red
    }
  }, errorMsg)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [{
      // flex: 1,
      flexDirection: 'row',
      height: _constants.SIZES.height > 700 ? 55 : 45,
      borderRadius: _constants.SIZES.tiny,
      backgroundColor: _constants.COLORS.white,
      borderWidth: 1,
      borderColor: _constants.COLORS.black07
    }, inputContainerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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
  }, prependComponent, /*#__PURE__*/_react.default.createElement(_reactNativeAutocompleteInput.default, {
    data: options,
    containerStyle: {
      width: '100%',
      ..._constants.styles.center
      // backgroundColor: COLORS.black20,
    },

    inputContainerStyle: {
      width: '100%',
      height: _constants.SIZES.height > 700 ? 52 : 42,
      borderRadius: _constants.SIZES.tiny,
      flexDirection: 'row',
      marginLeft: -_constants.SIZES.radius,
      borderWidth: 0
      // backgroundColor: COLORS.black20,
    },

    listContainerStyle: {
      width: '100%',
      backgroundColor: _constants.COLORS.white,
      ...listStyle,
      ..._constants.styles.shadow
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
          _react.default.createElement(_reactNative.Pressable, {
            style: {
              ..._constants.styles.dropdownRowStyle
              // paddingHorizontal: SIZES.padding,
              // paddingVertical: SIZES.radius,
              // backgroundColor: COLORS.secondary,
              // margin: SIZES.tiny,
            },

            onPress: () => {
              setSelected(item);
              clearFilteredOptions();
            }
          }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
            style: _constants.styles.dropdownRowTxtStyle
          }, item.label))
        );
      }
    },
    renderTextInput: () => /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
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
        borderTopLeftRadius: _constants.SIZES.radius,
        borderBottomLeftRadius: _constants.SIZES.radius,
        paddingLeft: _constants.SIZES.padding,
        backgroundColor: 'transparent',
        marginBottom: 2,
        zIndex: -1,
        ..._constants.FONTS.body4,
        color: _constants.COLORS.black70,
        lineHeight: 18
      },
      defaultValue: value === null || value === void 0 ? void 0 : value.label,
      onChangeText: suggestionsHandler
      // onPressIn
      ,
      onBlur: onBlur
    })
  }), (value === null || value === void 0 ? void 0 : value.label) && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: {
      width: 40,
      marginLeft: -48,
      height: _constants.SIZES.height > 700 ? 55 : 45,
      transform: [{
        rotate: '-45deg'
      }],
      zIndex: 5,
      ..._constants.styles.center
    },
    onPress: () => {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.clear();
      setSelected({
        id: undefined,
        label: undefined
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_moti.MotiImage, {
    transition: {
      duration: 400,
      type: 'timing'
    },
    animate: {
      transform: [{
        scaleX: options.length > 0 ? -1 : 1
      }]
    },
    source: _constants.icons.add,
    resizeMode: "contain",
    style: {
      // marginRight: SIZES.radius,
      tintColor: _constants.COLORS.black,
      width: 14,
      height: 14
    }
  })))));
}
var _default = FormSelectSearch;
exports.default = _default;
//# sourceMappingURL=index.js.map
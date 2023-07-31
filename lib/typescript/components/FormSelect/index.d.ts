import React from 'react';
import { ViewProps } from 'react-native';
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
declare function FormSelectSearch(props: IFormSelectSearch): JSX.Element;
export default FormSelectSearch;

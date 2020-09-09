# react-native-form-component

A customizable form component for react-native. It handles basic validation of inputs, and also alerts you of a failed validation.

## Installation

```sh
yarn add react-native-form-component
```

## Components

- [Form](#form)
- [FormItem](#form-item)
- [Label](#label)

### Form

Wrapper component for form items. It is advised to use this component to wrap every other component contained in this library. The `Form` component comes with a submit button that does validation of form items.

```jsx
import { Form } from 'react-native-form-component';
//...

return (
  <Form>
    <FormItem />
  </Form>
);
```

### Props

| Prop                   | Function                                                                                               | Type               | Default | Platform |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ------- | -------- |
| keyboardVerticalOffset | Distance between the top of the user screen and the Form component, may be non-zero in some use cases. | number             | 50      | iOS      |
| buttonText             | Text to be displayed by submit button                                                                  | string             | Submit  | All      |
| buttonStyle            | Style of submit button                                                                                 | object \| object[] | -       | All      |
| buttonTextStyle        | Style of submit button text                                                                            | object \| object[] | -       | All      |
| onButtonPress          | Action to be performed when button is pressed                                                          | () => void         | -       | All      |

### Form Item

It is advised to use either the `label` or `placeholder`prop with `FormItem`, cos they are used to identify any `FormItem` that does not fulfil its validation conditions.

```jsx
import { FormItem } from 'react-native-form-component';
//...

return (
  //...
  <FormItem label="Email" isRequired />
);
```

| Prop           | Function                               | Type             | Required |
| -------------- | -------------------------------------- | ---------------- | -------- |
| label          | Label for FormItem                     | string           | no       |
| textInputStyle | Style of TextInput portion of FormItem | object\|object[] | no       |
| isRequired     | Indicates whethter this Form           |

### Label

```jsx
import { Label } from 'react-native-form-component';
//...

return (
  //...
  <Label text="repository name" isRequired />
);
```

### Props

| Prop       | Type    | Required |
| ---------- | ------- | -------- |
| text       | string  | yes      |
| isRequired | boolean | no       |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

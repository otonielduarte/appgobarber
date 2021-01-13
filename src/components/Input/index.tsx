import { useField } from '@unform/core';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueRef {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const refTextElement = useRef<any>(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputRef = useRef<InputValueRef>({ value: defaultValue });

  function imperativeFunction() {
    return {
      focus() {
        refTextElement.current.focus();
      },
    };
  }

  useImperativeHandle(ref, imperativeFunction);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputRef.current.value = value;
        refTextElement.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputRef.current.value = '';
        refTextElement.current.clear();
      },
    });
  }, [registerField, fieldName]);
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput
        ref={refTextElement}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={value => (inputRef.current.value = value)}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);

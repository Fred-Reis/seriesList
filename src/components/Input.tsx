import React from "react";
import { Input as NativebaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativebaseInput
      bg="gray.600"
      h={12}
      flex={1}
      size="md"
      mx={4}
      borderWidth={2}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      borderColor="gray.100"
      rounded="lg"
      _focus={{
        borderColor: "gray.100",
        bg: "gray.600",
      }}
      {...rest}
    />
  );
}

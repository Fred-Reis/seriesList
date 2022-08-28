import React from "react";
import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="red.500"
      h={14}
      fontSize="sm"
      rounded="lg"
      // _pressed={{
      //   bg: "green.500",
      // }}
      {...rest}
    >
      <Heading
        color="white"
        fontSize="xl"
        fontWeight="bold"
        fontFamily="heading"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}

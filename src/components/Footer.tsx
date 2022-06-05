import { Flex, FlexProps, Text } from '@chakra-ui/react';

export const Footer = (props: FlexProps) => (
  <Flex
    as='footer'
    py='2rem'
    width='100%'
    bgColor='#292B34'
    alignItems='center'
    justifyContent='center'
    {...props}
  >
    <Text color='whiteAlpha.700'>
      This is a University project made by Marco Fiorito and Felipe Najson, June
      2022
    </Text>
  </Flex>
);

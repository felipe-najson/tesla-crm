import { Link as ChakraLink, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Container } from './Container';

export const Header = () => {
  const router = useRouter();

  return (
    <Container flexDirection='row' width='full' maxWidth='3xl' py={5} mb={5}>
      <Button
        as={ChakraLink}
        variant='solid'
        colorScheme='gray'
        rounded='button'
        flexGrow={1}
        mx={2}
        width='full'
        onClick={() => router.push('/')}
      >
        Home
      </Button>
      <Button
        as={ChakraLink}
        variant='solid'
        colorScheme='gray'
        rounded='button'
        flexGrow={1}
        mx={2}
        width='full'
        onClick={() => router.push('/')}
      >
        Manufacturing Analysis
      </Button>
      <Button
        as={ChakraLink}
        variant='solid'
        rounded='button'
        colorScheme='gray'
        flexGrow={3}
        mx={2}
        width='full'
        onClick={() => router.push('/vehicleTelemetry')}
      >
        Vehicle Telemetry
      </Button>
    </Container>
  );
};

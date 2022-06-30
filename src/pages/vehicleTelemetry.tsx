import { Flex, Box, Button } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { TelemetryForm } from '../components/telemetry/TelemetryForm';
import { TelemetryTable } from '../components/telemetry/TelemetryTable';
import { useState } from 'react';

function VehicleTelemetry() {
  const [values, setValues] = useState([]);

  const getData = async () => {
    const response = await fetch('/api/telemetry', {
      method: 'GET',
    });
    console.warn('response', response);
    const data = await response.json();
    setValues(data);
  };

  return (
    <Container height='100vh' width='full'>
      <Header />
      <Flex color='white' width={'90%'}>
        <Box flex={2}>
          <TelemetryTable values={values} />
        </Box>
        <Box flex={1}>
          <TelemetryForm />
        </Box>
        <Button onClick={getData} variant='outline'>
          Retrive Data
        </Button>
      </Flex>
      <Footer />
    </Container>
  );
}

export default VehicleTelemetry;

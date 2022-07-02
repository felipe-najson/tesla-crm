import { Flex, Box, Button } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { TelemetryForm } from '../components/telemetry/TelemetryForm';
import { TelemetryTable } from '../components/telemetry/TelemetryTable';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container width='full'>
      <Header />
      <Flex color='white' width={'95%'} mb={5}>
        <Box width='70%'>
          <TelemetryTable values={values} />
        </Box>
        <Box width='30%' textAlign={'center'}>
          <TelemetryForm />
          <Button onClick={getData} variant='outline' width={'80%'} mt={5}>
            Fetch Data
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
}

export default VehicleTelemetry;

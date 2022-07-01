import { Flex, Box, Button } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { TelemetryForm } from '../components/telemetry/TelemetryForm';
import { TelemetryTable } from '../components/telemetry/TelemetryTable';
import { useState } from 'react';
import { UsersTable } from '../components/profile/UsersTable';
import { RegisterForm } from '../components/profile/RegisterForm';
import { ProfileForm } from '../components/profile/ProfileForm';

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
    <Container width='full'>
      <Header />
      <Flex color='white' width={'95%'} mb={5}>
        <Box width='75%'>
          <UsersTable values={values} />
        </Box>
        <Box width='25%' textAlign={'center'}>
          <ProfileForm />
          <Button onClick={getData} variant='outline' width={'80%'} mt={5}>
            Retrive Data
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
}

export default VehicleTelemetry;

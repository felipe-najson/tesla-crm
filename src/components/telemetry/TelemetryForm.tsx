import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

async function sendData(info) {
  const response = await fetch('/api/telemetry', {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

export const TelemetryForm = () => {
  const [wave, setWave] = useState('');
  const [temperature, setTemperature] = useState('');
  const [vibration, setVibration] = useState('');
  const [pressure, setPressure] = useState('');
  const [voltage, setVoltage] = useState('');
  const [speed, setSpeed] = useState('');
  const [time, setTime] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await sendData({
        wave,
        temperature,
        vibration,
        pressure,
        voltage,
        speed,
        time,
      });

      setTemperature('');
      setVibration('');
      setPressure('');
      setVoltage('');
      setSpeed('');
      setTime('');
      setWave('');
    } catch (error) {
      alert('Oops! Something went wrong.');
      console.log(error);
    }
  }

  return (
    <FormControl width={'80%'} margin='auto'>
      <Text fontSize='2xl' mb={6} textAlign='center'>
        Add a New Item
      </Text>
      <FormLabel htmlFor='text'>Wave</FormLabel>
      <Input
        size='sm'
        id='text'
        type='text'
        value={wave}
        onChange={(e) => setWave(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='text'>Temperature</FormLabel>
      <Input
        size='sm'
        id='text'
        type='text'
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='text'>Vibration</FormLabel>
      <Input
        size='sm'
        id='text'
        type='text'
        value={vibration}
        onChange={(e) => setVibration(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='text'>Pressure</FormLabel>
      <Input
        size='sm'
        id='text'
        type='text'
        value={pressure}
        onChange={(e) => setPressure(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='text'>Voltage</FormLabel>
      <Input
        size='sm'
        id='text'
        type='text'
        value={voltage}
        onChange={(e) => setVoltage(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='text'>Speed</FormLabel>
      <Input
        size='sm'
        id='text'
        type='text'
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='text'>Time</FormLabel>
      <Input
        size='sm'
        id='text'
        type='text'
        value={time}
        onChange={(e) => setTime(e.target.value)}
        mb={1}
      />

      <Button
        onClick={handleSubmit}
        color={'white'}
        variant='solid'
        width='full'
        mt={6}
      >
        Submit
      </Button>
    </FormControl>
  );
};

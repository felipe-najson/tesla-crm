import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

async function registerUser(info) {
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

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await registerUser({
        email,
        password,
      });

      setEmail('');
      setPassword('');
      setUsername('');
    } catch (error) {
      alert('Oops! Something went wrong.');
      console.log(error);
    }
  }

  return (
    <FormControl width={'80%'} margin='auto'>
      <Text fontSize='2xl' mb={6} textAlign='center'>
        Add a new user
      </Text>
      <FormLabel htmlFor='email'>Email</FormLabel>
      <Input
        id='email'
        type='email'
        size='sm'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='password'>Password</FormLabel>
      <Input
        id='password'
        type='password'
        size='sm'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='username'>Username</FormLabel>
      <Input
        id='username'
        type='text'
        size='sm'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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

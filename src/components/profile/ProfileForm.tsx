import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

async function fillProfileUser(userData) {
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(userData.message || 'Something went wrong!');
  }
}
export const ProfileForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');

  const cleanForm = () => {
    setEmail('');
    setPassword('');
    setUsername('');
    setName('');
    setLastName('');
    setBirthday('');
    setCountry('');
    setLanguage('');
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await fillProfileUser({
        email,
        password,
        username,
        name,
        lastName,
        birthday,
        country,
        language,
      });

      cleanForm();
    } catch (error) {
      alert('Oops! Something went wrong.');
      console.log(error);
    }
  }

  return (
    <FormControl width={'80%'} margin='auto'>
      <Text fontSize='2xl' mb={6} textAlign='center'>
        Add a New User
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
      <FormLabel htmlFor='name'>Name</FormLabel>
      <Input
        id='name'
        type='text'
        size='sm'
        value={name}
        onChange={(e) => setName(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='lastName'>Last Name</FormLabel>
      <Input
        id='lastName'
        type='text'
        size='sm'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='birthday'>Birthday</FormLabel>
      <Input
        id='birthday'
        type='text'
        size='sm'
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        mb={1}
      />
      <FormLabel htmlFor='country'>Country</FormLabel>
      <Select
        id='country'
        placeholder='Select country'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option>Brasil</option>
        <option>Spain</option>
        <option>United States</option>
        <option>Uruguay</option>
      </Select>
      <FormLabel htmlFor='country'>Language</FormLabel>
      <Select
        id='language'
        placeholder='Select language'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>PR</option>
        <option>EN</option>
        <option>ES</option>
      </Select>

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

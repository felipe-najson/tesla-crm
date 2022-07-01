import * as React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const arr = [
  {
    email: 'jhondoe@mail.com',
    password: '*******',
    username: 'jhonDoe23',
    name: 'John',
    lastName: 'Doe',
    birthday: '22/01/1999',
    country: 'United States',
    language: 'en',
  },
];
export const UsersTable = ({ values }) => {
  return (
    <TableContainer height='80vh' mr={10}>
      <Table size='sm' variant='simple'>
        <TableCaption>Users Information</TableCaption>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Password</Th>
            <Th>Username</Th>
            <Th>Name</Th>
            <Th>Last Name</Th>
            <Th>Birthday</Th>
            <Th>Country</Th>
            <Th>Language</Th>
          </Tr>
        </Thead>
        <Tbody>
          {arr?.map((item) => (
            <Tr>
              <Td>{item?.email}</Td>
              <Td>{item?.password}</Td>
              <Td>{item?.username}</Td>
              <Td>{item?.name}</Td>
              <Td>{item?.lastName}</Td>
              <Td>{item?.birthday}</Td>
              <Td>{item?.country}</Td>
              <Td>{item?.language.toUpperCase()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

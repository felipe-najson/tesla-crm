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

export const UsersTable = ({ values }) => {
  console.log(values);

  return (
    <TableContainer height='80vh' mr={10}>
      <Table size='sm' variant='simple'>
        <TableCaption>Users Information</TableCaption>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Username</Th>
            <Th>Name</Th>
            <Th>Last Name</Th>
            <Th>Birthday</Th>
            <Th>Country</Th>
            <Th>Language</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          {values?.map((item) => (
            <Tr>
              <Td>{item?.email}</Td>
              <Td>{item?.username}</Td>
              <Td>{item?.name}</Td>
              <Td>{item?.lastName}</Td>
              <Td>{item?.birthday}</Td>
              <Td>{item?.country}</Td>
              <Td>{item?.language?.toUpperCase()}</Td>
              <Td>{item?.password}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

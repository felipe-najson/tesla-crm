import * as React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export const TelemetryTable = ({ values }) => {
  console.log('values', values);

  return (
    <TableContainer height='80vh' mr={10}>
      <Table size='sm' variant='simple'>
        <TableCaption>Vehicle Telemetry Factors</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>Wave</Th>
            <Th isNumeric>Temperature</Th>
            <Th isNumeric>Vibration</Th>
            <Th isNumeric>Pressure</Th>
            <Th isNumeric>Voltage</Th>
            <Th isNumeric>Speed</Th>
            <Th isNumeric>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {values?.map((item) => (
            <Tr>
              <Td isNumeric>{item?.wave?.toFixed(2)}</Td>
              <Td isNumeric>{item?.temperature?.toFixed(2)}</Td>
              <Td isNumeric>{item?.vibration?.toFixed(2)}</Td>
              <Td isNumeric>{item?.pressure?.toFixed(2)}</Td>
              <Td isNumeric>{item?.voltage?.toFixed(2)}</Td>
              <Td isNumeric>{item?.speed?.toFixed(2)}</Td>
              <Td isNumeric>{item?.time?.toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

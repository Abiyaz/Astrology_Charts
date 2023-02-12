import React from "react";
import { Divider, Stack, Text, Box, Table } from "@mantine/core";

function BirthChart({ color, tableData }) {
  const { planets, ascendant, ayanamsa, houses } = tableData;
  console.log(houses);

  function planetReader(value) {
    let temp = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        console.log(value[key]);
        for (const keyValue of Object.keys(value[key])) {
          console.log(keyValue);
          //   return (
          temp.push(
            <tr>
              <td>
                <Text size="xs" color={color}>
                  {keyValue}
                </Text>
              </td>
              <td>
                <Text size="xs" color={color}>
                  {value[key][keyValue]}
                </Text>
              </td>
            </tr>
          );
          //   );
        }
      }
    }
    return temp;
  }
  planetReader(houses);
  return (
    <Stack spacing={1}>
      <Text size="lg" weight="bold" color={color} align="center">
        Birth Chart
      </Text>
      <Divider size={2} color={color} />
      <Box>
        <Stack spacing={1} sx={{ padding: 10 }}>
          {
            <Table verticalSpacing={0}>
              <thead>
                <tr>
                  <th>Houses</th>
                  <th>Planets</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <td>{planetReader(houses).map((d) => d)}</td>
                  <td>{planetReader(ascendant).map((d) => d)}</td>
                </td>
                <td>
                  <td> {planetReader(planets).map((d) => d)}</td>
                  <td> {planetReader(ayanamsa).map((d) => d)}</td>
                </td>
              </tbody>
            </Table>
          }
        </Stack>
      </Box>
      <Divider size={2} color={color} />
    </Stack>
  );
}

export default BirthChart;

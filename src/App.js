import React, { useState } from "react";
import Chart from "./Chart";
import ColorPicker from "./ColorPicker";
import { Stack, Group, Box, Button, Paper, Loader, Center } from "@mantine/core";
import tableData from "./data.json";
import BirthChart from "./BirthChart";
import UserDetailsForm from "./Modules/UserDetailsForm";
import LocationPicker from "./Modules/LocationPicker";

function App() {
  const [chartColor, setChartColor] = useState("#941111");
  const [glyphColor, setGlyphColor] = useState("#941111");
  const [bgColor, setBgColor] = useState("white");
  const [data, setData] = useState(null);
  const [loading,setLoading]=useState(false)
  const [locationMarker,setLocationMarker]=useState({ lat: 22.852, lng: 78.403 })

  console.log("chart color in parent", chartColor);

  function resetColor() {
    setChartColor("#941111");
    setGlyphColor("#941111");
    setBgColor("white");
  }
  return (
    <Stack sx={{ background: `${bgColor}` }}>
      <Group grow>
        <Paper shadow="xs" p="md" sx={{ minWidth: 340 }} mx="auto">
          <UserDetailsForm setData={setData} locationMarker={locationMarker} setLoading={setLoading}/>
        </Paper>
        <LocationPicker setLocationMarker={setLocationMarker} />
      </Group>
      {/* <Group> */}
      <Stack>
        <Group>
          {data && (
            <Chart
              chartColor={chartColor}
              glyphColor={glyphColor}
              chartData={data}
            />
          )}
        { data&& <Box>
            <Stack justify="flex-start" align="flex-start">
              <ColorPicker
                color={bgColor}
                setColor={setBgColor}
                label="Background Color"
              />
              <ColorPicker
                color={chartColor}
                setColor={setChartColor}
                label="Chart Color"
              />
              <ColorPicker
                color={glyphColor}
                setColor={setGlyphColor}
                label="Glyph Color"
              />
              <Button onClick={resetColor}>Reset</Button>
            </Stack>
          </Box>}
        </Group>
        <Box sx={{ paddingRight: 200, paddingLeft: 200 }}>
          {data && <BirthChart color={chartColor} tableData={data} />}
        </Box>
        {loading && <Center><Loader size="xl" variant="bars"/></Center>}
      </Stack>

      {/* </Group> */}
    </Stack>
  );
}

export default App;

import React, { useState } from "react";
import {
  NumberInput,
  TextInput,
  Button,
  Center,
  Stack,
  Box,
  Group,
  Select,
  Badge,
} from "@mantine/core";

import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 22.852, lng: 78.403 };
const DefaultZoom = 4;

const LocationPicker = ({setLocationMarker}) => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
    setLocationMarker({ lat: lat, lng: lng })
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setLocationMarker({ ...DefaultLocation })
    setZoom(DefaultZoom);
  }

  console.log(location)

  return (
    <Stack>
      <Box style={{ height: 500, width: "100%" , padding:20}}>
        <Group>
      Latitude:  <Badge color="pink" size="xl">{location.lat.toFixed(3)}</Badge>
      Longitude    <Badge color="indigo" size="xl">{location.lng.toFixed(3)}</Badge>
        Zoom  <Badge color="gray" size="xl">{zoom}</Badge>
        </Group>
        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          mapTypeId="roadmap"
          style={{ height: "100%" }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
        />

      
      </Box>

         <Center> <Button sx={{width:200}} onClick={handleResetLocation}>Reset Location</Button></Center>
    

    </Stack>
  );
};

export default LocationPicker;

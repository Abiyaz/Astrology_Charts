import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import dayjs from "dayjs";
import {
  NumberInput,
  TextInput,
  Button,
  Box,
  Group,
  Select,
  Text,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { TimeInput } from "@mantine/dates";
import { useMemo } from "react";
import axios from "axios";

// const schema = z.object({
//   name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
//   email: z.string().email({ message: 'Invalid email' }),
//   age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),

// });

const initialValues = {
  name: "XYZ",
  place: "Kolkata",
  dob: "2022-12-06",
  lat: "25.88",
  long: "45.67",
  time: "00:00:00",
  house: "E",
  ayanamasa: "27",
};

export default function UserDetailsForm({ setData ,locationMarker, setLoading}) {
  const form = useForm({
    // validate: zodResolver(schema),
    initialValues,
  });

  const {lng,lat}= locationMarker;

  const AyanamsaOptions = useMemo(
    () => new Array(30).fill(1).map((value, index) => `${value + index}`),
    []
  );

  function handleSubmit(event) {
    const controller = new AbortController();
    setLoading(true)
    axios
      .post("http://ec2-54-212-127-24.us-west-2.compute.amazonaws.com:3000/", {
       "date": dayjs(event?.dob).format("YYYY-MM-DD") || "2022-12-06",
       "hour": dayjs(event?.time).get("hour") || 12,
        "min": dayjs(event?.time).get("minute") || 12,
       "Long":parseFloat( lat.toFixed(2)) || 25.88,
        "Lat":parseFloat( lng.toFixed(2)) || 45.67,
       "House": event?.house||"E",
       "sidemode":parseInt(event?.ayanamasa)|| 27,
      })
      .then(function (response) {
        console.log(response);
        setData(response.data);
        setLoading(false)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error);
      });

      controller.abort()
  }


  function handleReset(){
    setData(null);
    form.reset()
  }

  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        {/* <form onSubmit={(event)=>handleSubmit(event)}> */}
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter name"
          mt="sm"
          {...form.getInputProps("name")}
        />
        <DatePicker
          placeholder="Pick Birth date"
          label="Birth date"
          withAsterisk
          {...form.getInputProps("dob")}
        />
        <TextInput label="Place" {...form.getInputProps("place")} />
        {/* <Group>
          <TextInput label="Lat" value={lat} {...form.getInputProps("lat")} type="number"/>
          <TextInput label="Long" value={lng} {...form.getInputProps("long")} type="number"/>
        </Group> */}
        <Group sx={{margin:10}}>
          Latitude: <Text>{lat.toFixed(2)}</Text>
          Longitude:<Text>{lng.toFixed(2)}</Text>
        </Group>
        <TimeInput label="Hour" {...form.getInputProps("time")} />
        <Select
          label="House Methods"
          placeholder="Pick house methods"
          searchable
          nothingFound="No options"
          data={["P", "K", "E", "A", "O"]}
          {...form.getInputProps("house")}
        />
        <Select
          label="Ayanamsa"
          type="number"
          placeholder="Pick Aynanamsa"
          searchable
          nothingFound="No options"
          data={AyanamsaOptions}
          {...form.getInputProps("ayanamasa")}
        />
        <Group position="right" mt="xl">
          <Button
            variant="light"
            type="reset"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

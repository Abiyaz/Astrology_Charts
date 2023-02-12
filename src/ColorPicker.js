import { SketchPicker, BlockPicker } from "react-color";
import { useState, useEffect } from "react";
import { Box, Title, Group, Popover, Button } from "@mantine/core";

function ColorPicker({ color, setColor, label }) {
  //creating state to store our color and also set color using onChange event for sketch picker
  const [sketchPickerColor, setSketchPickerColor] = useState(color);

  useEffect(() => {
    setColor(sketchPickerColor);
  }, [sketchPickerColor]);

  return (
    <Popover width={250} position="right" withArrow shadow="md">
      <Popover.Target>
        <Group>
          <Button>{label}</Button>
          <Box
            sx={{
              height: 25,
              width: 25,
              color,
              background: color,
            }}
          ></Box>
        </Group>
      </Popover.Target>

      <Popover.Dropdown>
        <SketchPicker
          onChange={(color) => {
            setSketchPickerColor(color.hex);
          }}
          color={sketchPickerColor}
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export default ColorPicker;

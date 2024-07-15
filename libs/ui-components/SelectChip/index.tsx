import * as React from 'react';

import cx from 'classnames';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

interface SelectChipProps {
  label: string;
  containerClass?: string;
  id: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({
  label,
  containerClass,
  id,
}: SelectChipProps) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div
      className={cx(
        { 'flex flex-col gap-1 justify-between': !!label },
        { [`${containerClass}`]: !!containerClass }
        // 'mt-3'
      )}
    >
      {label ? (
        <label
          htmlFor={id}
          className="block font-manrope text-sm capitalize font-medium leading-[1.25rem] text-secondary-500"
        >
          {label}
        </label>
      ) : null}
      <Select
        multiple
        value={personName}
        onChange={handleChange}
        input={
          <OutlinedInput
            id={id}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  // the normal state border
                  borderColor: 'grey',
                },
                '&:hover fieldset': {
                  // hover state border
                  borderColor: 'grey',
                },
                '&.Mui-focused fieldset': {
                  // focus state border
                  borderColor: 'grey', // Removes the border
                  borderWidth: 2, // You can set this to '0' if you don't want any border change
                },
              },
            }}
          />
        }
        renderValue={(selected) => (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.5,
            }}
          >
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

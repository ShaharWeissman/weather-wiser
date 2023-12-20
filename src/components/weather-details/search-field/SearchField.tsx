import {Autocomplete,TextField} from '@mui/material';
import './SearchField.css';
const cityMockData = [{name: 'London'}, {name: 'New York'}, {name: 'Tel Aviv'}];

function SearchField(): JSX.Element {
return (
    <div className="SearchField">
        <Autocomplete
          id="city-select"
          options={cityMockData}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Choose a city" />
          )}
        />
</div>
)

}

export default SearchField;
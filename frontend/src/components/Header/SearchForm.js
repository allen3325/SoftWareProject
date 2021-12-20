import * as React from "react";
import Search from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "@emotion/styled";

function SearchForm() {
  return (
    <TextField
      margin="normal"
      fullWidth
      id="input-with-icon-textfield"
      label="搜尋欄"
      color="secondary"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
}

export default SearchForm;

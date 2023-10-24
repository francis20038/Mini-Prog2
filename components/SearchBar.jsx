import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton} from '@mui/material';
import { Search } from '@mui/icons-material';
import { red } from "@mui/material/colors";


function SearchBar() {
  return (
    <Paper component="form"
    onSubmit={() => {}}
    sx={{
      borderRaduis: 20, border: '1px solid #e3e3e3', pl: 2, mr: { sm: 5 }, boxShadow: 'none'
    }}>
      <input className="search-bar"
      placeholder="Search..."
      value=""
      onChange={() => {}}/>
      <IconButton type="submit" sx={{ p: '10px', color: 'red'}}>
        <Search />
      </IconButton>
    </Paper>
  )
};

export default SearchBar
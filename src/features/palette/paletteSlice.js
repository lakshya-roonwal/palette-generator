import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: {
    $oid: "6606a70a2002727889fc31d4",
  },
  name: "Example Palette",
  palette: {
    primary: "#007bff",
    primary_content: "#fff",
    primary_light: "#6ec6ff",
    primary_dark: "#0056b3",
    secondary: "#6c757d",
    secondary_content: "#ffffff",
    secondary_light: "#b3b9bd",
    secondary_dark: "#343a40",
    foreground: "#212529",
    background: "#ffffff",
    border: "#ced4da",
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    success_content: "#ffffff",
    warning_content: "#212529",
    error_content: "#ffffff",
    _id: {
      $oid: "6606a70a2002727889fc31d5",
    },
  },
  owner: "user_2eGjDX5HgkwXKxhQ6NtbwcS0jIv",
  createdAt: {
    $date: "2024-03-29T11:33:30.065Z",
  },
  updatedAt: {
    $date: "2024-03-29T11:33:30.065Z",
  },
  __v: 0,
};

const paletteSlice = createSlice({
  name: "palette",
  initialState: initialState,
  reducers: {
    // Add your reducer methods here
    // Example:
    // updatePaletteColor: (state, action) => {
    //   state.palette = action.payload;
    // },
    // Add more methods as needed
  },
});

export const {
  /* Add your action creators here */
} = paletteSlice.actions;

export default paletteSlice.reducer;

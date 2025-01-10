import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profile: {
    // address:"",
    // phoneNumber:"",
    //  description:""
  },
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const userData = action.payload || {};

      state.profile = userData;
    },
  },
});
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;

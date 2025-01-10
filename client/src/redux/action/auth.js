import axios from "axios";
// import { BASE_URL } from "../../../utils/config";
import { saveCookie } from "../../../utils/decryptSession";
import { setProfile } from "../slice/profileSlice";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const verifyEmail = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/checkuser`, {
      params: email,
      //  withCredentials: true,
      timeout: 5000,
    });
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
export const verifyOtp = async (Otp) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/verifyotp`, {
      params: Otp,
      //  withCredentials: true,
      timeout: 5000,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
// export const loginUser= async (data) => {
//   // console.log(data,"data");
//   try {
//     const response = await axios.post(`${BASE_URL}/user/login`, data,{
//       //  withCredentials: true,
//       timeout: 5000,
//     });

//
//         return response;
//     const details=response.data;
//     if(details.status===true){
//         saveCookie(details.session);
//          toast.success(details.message);
//         return response;

//     }

//   } catch (err) {
//     console.log(err);
//   }
// };

export const loginUser = async (data) => {
  try {
    // console.log("Sending data to backend:", data); // Log data before sending
     console.log(BASE_URL);
    const response = await axios.post(`${BASE_URL}/user/login`, data, {
      timeout: 5000,
    });
    // console.log("Response from backend:", response); // Log entire response object

    const details = response.data;
    // console.log("Response data details:", details); // Log just the data received

    saveCookie(details.session); // Assuming saveCookie is for session handling

    return details; // Return details to be used in NextAuth callback
  } catch (err) {
    console.error("Error in loginUser:", err.message || err); // Log error message
    throw err; // Throw error to be handled in the signIn callback
  }
};

export const RegisterUser = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/register`, data, {
      //  withCredentials: true,
      timeout: 5000,
    });
    const details = response.data;
    saveCookie(details.session);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const UserProfile = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/editprofile`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 5000,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getProfile = (_id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/getprofile`, {
      params: { _id },
      timeout: 5000,
    });
    dispatch(setProfile(response.data.profile));
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserProfile = async (_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/getprofile`, {
      params: { _id },
      timeout: 5000,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const ResetPassword = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/resetpassword`, data, {
      //  withCredentials: true,
      timeout: 5000,
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

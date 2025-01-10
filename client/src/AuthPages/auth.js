import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getPaintings = async () => {
  try {
     const response = await axios.get(`${BASE_URL}/user/getpainting`, {
       timeout: 5000,
     });
     return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getClassics = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/getclassics`,
      {
        timeout: 5000,
      }
    );
    // console.log(response);

    return response.data;
    
  } catch (err) {
    console.log(err);
  }
};
export const postCheckout = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/checkout`, data, {
      timeout: 5000,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const addToCart = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/addcart`, data, {
      timeout: 5000,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCartDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/getcart`, {
      timeout: 5000,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};


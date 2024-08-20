import { axiosApi } from "@/axiosAPI";

export const doFetchLogin = async (data) => {
  try {
    const response = await axiosApi({
      method: "post",
      url: "v1/admin/login",
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return error.response;
  }
};

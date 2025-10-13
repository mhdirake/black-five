import { useDispatch as ToolkitDispatch } from "react-redux";
import { errors } from "@/config/errors";
import { toast } from "react-toastify";

export default function useDispatch() {
  const dispatch = ToolkitDispatch();

  const handleRequest = async (apiCall, successMessage, shouldLogout) => {
    try {
      const data = await dispatch(apiCall);

      if (!!data.error) {
        throw data.payload;
      }

      if (successMessage) {
        toast.success(successMessage);
      }

      return data;
    } catch (error) {
      errors(error, shouldLogout)

      throw error;
    }
  };

  return handleRequest;
}

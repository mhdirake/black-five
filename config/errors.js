import { toast } from "react-toastify";

const PERMISSION_NOT_ALLOWED = 403;
const USER_NOT_LOGGED_IN = 401;
const SERVER_ERROR = 500

export const errors = async (response, shouldLogout = true) => {
  const status = response?.status || response?.response?.status;
  const url = response?.url || response?.response?.config?.url || "";
  const checkUnAuth =
  !url?.includes('/api/login') &&
  !url?.includes('/api/register') &&
  !url?.includes('/api/otp') &&
  status === USER_NOT_LOGGED_IN;

  if (
    shouldLogout &&
    (status === PERMISSION_NOT_ALLOWED || checkUnAuth)
    ) {
      window.localStorage.clear();
      const { logout } = await import("@/config/authClient");
      await logout("/");
      return;
  }
  
  const error = response?.response?.data || response;
  const clientMessage = error?.message;

  if(status === USER_NOT_LOGGED_IN && !shouldLogout) {
    toast.error("لطفا ابتدا وارد اکانت خود شوید.")
  }else  if(status === SERVER_ERROR) {
    toast.error("مشکلی پیش آمده است.")
  }else {
    const message =
    clientMessage || "مشکلی پیش آمده است.";
    toast.error(message);
  }

  throw error;
};

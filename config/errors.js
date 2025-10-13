import { toast } from "react-toastify";

const PERMISSION_NOT_ALLOWED = 403;
const USER_NOT_LOGGED_IN = 401;
const SERVER_ERROR = 500

export const errors = async (response, shouldLogout = true) => {
  const checkUnAuth =
  !response?.url?.includes('/api/login') &&
  !response?.url?.includes('/api/register') &&
  !response?.url?.includes('/api/otp') &&
  response?.status === USER_NOT_LOGGED_IN;

  if (
    shouldLogout &&
    (response?.status === PERMISSION_NOT_ALLOWED || checkUnAuth)
    ) {
      const origin = window.location.origin;
      await fetch(`${origin}/inner-api/logout`).finally(() => {
      window.localStorage.clear();
      window.location.reload();
      return;
    });
  }
  
  const error = await response?.json();
  const clientMessage = error?.message;

  if(response?.status === USER_NOT_LOGGED_IN && !shouldLogout) {
    toast.error("لطفا ابتدا وارد اکانت خود شوید.")
  }else  if(response?.status === SERVER_ERROR) {
    toast.error("مشکلی پیش آمده است.")
  }else {
    const message =
    clientMessage || "مشکلی پیش آمده است.";
    toast.error(message);
  }

  throw error;
};

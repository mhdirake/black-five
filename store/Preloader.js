"use client";

import useDispatch from "@/hooks/useDispatch";
import { setCart } from "./slices/cart/cartSlice";
import { setUser } from "./slices/user/userSlice";
import { useEffect } from "react";

function Preloader({ user, cart }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(user));
    dispatch(setCart(cart));
  }, [user, cart]);

  return null; 
}

export default Preloader;

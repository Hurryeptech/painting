/* eslint-disable react/display-name */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "../utils/decryptSession";

const innerAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();

      if (session) {
        setSession(session);
      } else {
        router.push("/");
      }
    };
    checkSession();
  }, [session, router]);
  return session ? <Component {...props} /> : null;
};

export default innerAuth;

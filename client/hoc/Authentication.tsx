/* eslint-disable react/display-name */
'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "../utils/decryptSession";

const withAuth = (Component: any) => (props: any) => {
    const router = useRouter();
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
      const checkSession = async () => {

        const session = await getSession();
  router.push("/Home")
        if (session) {
          setSession(session);

          router.push("/Home");
        } else {
          router.push("/");
        }
      };
      checkSession();
    }, [session, router]);
    return !session ? <Component {...props} /> : null;
  };

export default withAuth;

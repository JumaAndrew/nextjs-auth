"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import { useState } from "react";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const onSignup = async () => {};

  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  );
}

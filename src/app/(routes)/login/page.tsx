"use client";
import { Button, Container, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

interface Data {
  message: string;
}

export default function LoginPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({ email, password }),
      },
    });

    if (response.ok) {
      router.push("/profile");
    } else {
      console.log(response);
    }
  }

  const [data, setData] = useState<string>("loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((response) => response.json())
      .then((data: Data) => {
        console.log(data);
        setData(data.message);
      });
  });

  // console.log(params, searchParams);
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>Welcome to login page. Message: {data}</div>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField type="email" name="email" placeholder="Email" required />
        <TextField
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
}

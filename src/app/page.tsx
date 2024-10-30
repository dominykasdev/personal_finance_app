"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

export default function Home() {
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      // TODO:
      // IF LOGGED IN, CHECK USER_ID IF EXISTS
      // IF EXISTS, UPDATE LAST_LOGIN, LAST_IP
      // ELSE REGISTER USER
      console.log(user);

      fetch("http://localhost:8080/api/user/" + user.sub)
        .then((response) => response.json())
        .then((data: unknown) => {
          console.log(data);

          // const body = {
          //   email: user.email,
          //   email_verified: user.email_verified,

          // }

          if (data == "[]") {
            fetch("http://localhost:8080/api/user/", {
              method: "POST",
              body: JSON.stringify(user),
            });
          }
        });
    }
  });

  return (
    <main>
      <Box sx={{ width: "100%", height: "100%", position: "absolute" }}>
        <Container
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography align="center">
                {user ? `Welcome ${user?.name}` : "Welcome"} to your Personal
                Finance App.
              </Typography>

              {user ? (
                <Button type="button" href="/api/auth/logout">
                  Logout
                </Button>
              ) : (
                <Button
                  type="button"
                  href="/api/auth/login"
                  data-testid="LoginBtn"
                >
                  Login
                </Button>
              )}
            </>
          )}
        </Container>
      </Box>
    </main>
  );
}

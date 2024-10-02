"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

export default function Home() {
  const { user, isLoading } = useUser();

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
                <Button type="button" href="/api/auth/login">
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

import { Box, Button, Container, Typography } from "@mui/material";

export default function Home() {
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
          <Typography align="center">
            Welcome to your Personal Finance App.
          </Typography>
          <Button type="button" href="/api/auth/login">
            Login
          </Button>
        </Container>
      </Box>
    </main>
  );
}

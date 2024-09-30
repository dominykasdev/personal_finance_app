import { Box } from "@mui/material";

async function callApi() {
  return fetch("http://localhost:8080/api")
    .then((res: Response) => {
      console.log(res);
    })
    .then((data) => {
      return data;
    });
}

export default async function Home() {
  const message = await callApi();

  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <main>
        <Box>{message}</Box>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

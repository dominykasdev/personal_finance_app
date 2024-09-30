"use client";
import { useEffect, useState } from "react";

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
  return <div>Welcome to login page. Message: {data}</div>;
}

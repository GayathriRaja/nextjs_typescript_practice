"use client"
import Link from "next/link";

function FetchData() {
  const onClickHandler = () => {
    fetch("http://localhost:3000/api")
      .then((data) => console.log("data", data))
      .catch((err) => console.log("Error in fetching data"));
  };
  return <button onClick={onClickHandler}>Fetch Data</button>;
}

export default FetchData;

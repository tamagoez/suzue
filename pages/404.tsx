import Error from "next/error";
import { useEffect, useState } from "react";
import { replaceurl } from "../utils/urls";

export default function Page() {
  const [errorCode, setErrorCode] = useState<number>(200);

  async function setStatus() {
    const res = await fetch(replaceurl(location.href + location.search));
    const statusCode = res.status;
    setErrorCode(statusCode);
    console.log(statusCode);
  }
  useEffect(() => {
    setStatus();
  }, []);
  return (
    <>
      {errorCode === 200 ? (
        <div>
          <h1>もうちょい待ってて</h1>
          <h2>We're going to redirect you</h2>
        </div>
      ) : (
        <Error statusCode={errorCode} />
      )}
    </>
  );
}

import React from "react";
import { useRouter } from "next/router";
import { titleCase } from "../../utils/helpers";
import Link from "next/link";

export default function PageTitle({ title, children, href }) {
  const router = useRouter();

  let path = router.pathname;

  let lastIndex = router.pathname.lastIndexOf("/");
  path = path.substring(0, lastIndex);

  let lastWord = path.split("/").slice(-1);

  return router.pathname != "/" ? (
    <nav>
      {router.pathname == "/wiki" ||
      router.pathname == "/biography" ||
      router.pathname == "/open-invite" ? (
        <>
          <Link href="/">
            <a>&#8592;</a>
          </Link>{" "}
          &nbsp;/ &nbsp;
          <h1>{title}</h1>
        </>
      ) : (
        <>
          <Link href={path}>
            <a>&#8592;</a>
          </Link>{" "}
          &nbsp;/ &nbsp;
          <h1>{title}</h1>
        </>
      )}
    </nav>
  ) : null;
}

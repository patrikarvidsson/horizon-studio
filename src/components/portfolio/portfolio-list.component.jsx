import Link from "next/link";
import { useRouter } from "next/router";

export default function PortfolioList({ entries }) {
  const router = useRouter();
  const returnLink = router.pathname.substring(0, router.pathname.lastIndexOf("/"));
  return (
    <ul>
      {entries
        .filter((page) => page.published == true)
        .map((page) => {
          const path = page.__resourcePath.match("pages/(.*).md");
          return (
            <li key={path}>
              <Link href={"/" + path[1].replace("/index", "")}>
                <a>{page.title}</a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

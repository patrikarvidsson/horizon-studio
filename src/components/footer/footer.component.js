import { useRouter } from "next/router";
import { titleCase } from "../../utils/helpers";
import Link from "next/link";
import GithubIcon from "../icons/github.component";
import WebringIcon from "../icons/webring.component";

export default function Footer({ children, href }) {
  const router = useRouter();

  let path = router.pathname;

  return router.pathname == "/" ? (
    <footer>
      <ul>
        <li>
          <Link href="/biography">
            <a>Biography</a>
          </Link>
        </li>
        <li>
          <Link href="/wiki">
            <a>Wiki</a>
          </Link>
        </li>
        <li>
          <a href="https://studio.patrikarvidsson.com">Studio</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="http://webring.xxiivv.com/#random">Webring</a>
        </li>
      </ul>
    </footer>
  ) : (
    <footer>
      <ul>
        <li>
          <a href="http://webring.xxiivv.com/#random">Webring</a>
        </li>
      </ul>
    </footer>
  );
}

import Link from "next/link";
import GithubIcon from "../icons/github.component";
import WebringIcon from "../icons/webring.component";

export default function Footer(props) {
  return (
    <footer>
      <a href="https://arvdsn.co">wiki</a>&nbsp;&nbsp;
      <a href="https://github.com/patrikarvidsson">
        <GithubIcon color="#fff" size="24" />
      </a>
      &nbsp;&nbsp;
      <a href="http://webring.xxiivv.com/#random">
        <WebringIcon color="#fff" size="24" />
      </a>
      &nbsp;&nbsp;
      <a href="mailto:hello@patrikarvidsson.com">mail</a>
    </footer>
  );
}

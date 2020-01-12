import React from "react";
import Octicon, { MarkGithub } from "@primer/octicons-react";
import { Link } from "../repo/styled";
import { FooterDiv, TextLink } from "./styled";

const Footer = () => (
  <FooterDiv>
    <TextLink>https://github.com/lu4ezar/github-search-graphql</TextLink>
    <Link
      href="https://github.com/lu4ezar/github-search-graphql"
      title="view src on Github"
    >
      <Octicon icon={MarkGithub} verticalAlign="middle" size="medium" />
    </Link>
  </FooterDiv>
);

export default Footer;

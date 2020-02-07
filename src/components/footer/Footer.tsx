import React from "react";
import Octicon, { MarkGithub } from "@primer/octicons-react";
import { FooterDiv, TextLink, SVGLink } from "./styled";

const Footer = () => (
  <FooterDiv>
    <TextLink>https://github.com/lu4ezar/github-search-graphql</TextLink>
    <SVGLink
      href="https://github.com/lu4ezar/github-search-graphql"
      title="view src on Github"
    >
      <Octicon icon={MarkGithub} verticalAlign="middle" size="medium" />
    </SVGLink>
  </FooterDiv>
);

export default Footer;

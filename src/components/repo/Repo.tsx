import React from "react";
import Octicon, {
  Globe,
  Eye,
  MarkGithub,
  Star,
  CircleSlash
} from "@primer/octicons-react";
import { StyledRepo, Text, Link, IconContainer, Icon } from "./styled";
import { RepoProps } from "../../interfaces";

const Repo = ({
  style,
  homepageUrl,
  name,
  description,
  url,
  stargazers,
  watchers
}: RepoProps) => (
  <StyledRepo style={style} role="listitem">
    <Text>
      <h3>
        <Link
          href={homepageUrl || url}
          title="open homepage in new tab"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </Link>
      </h3>
      <p className="description">
        {description || "No description was provided"}
      </p>
    </Text>
    <IconContainer>
      <Icon>
        {homepageUrl ? (
          <>
            <Link
              title="homepage"
              href={homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Octicon icon={Globe} size="medium" verticalAlign="middle" />
            </Link>
            <div>Homepage</div>
          </>
        ) : (
          <div className="not-allowed" title="no homepage">
            <Octicon icon={CircleSlash} size="medium" verticalAlign="middle" />
            <div>No Homepage</div>
          </div>
        )}
      </Icon>
      <Icon>
        <Link
          title="github page"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Octicon icon={MarkGithub} size="medium" verticalAlign="middle" />
        </Link>
        <div>Github</div>
      </Icon>
      <Icon title="stargazers">
        <Octicon icon={Star} size="medium" verticalAlign="middle" />
        <div>{stargazers.totalCount}</div>
      </Icon>
      <Icon title="watchers">
        <Octicon icon={Eye} size="medium" verticalAlign="middle" />
        <div>{watchers.totalCount}</div>
      </Icon>
    </IconContainer>
  </StyledRepo>
);

export default Repo;

import React from "react";
import Octicon, {
  Globe,
  Eye,
  MarkGithub,
  Star,
  CircleSlash
} from "@primer/octicons-react";
import { StyledRepo, Text, Link, IconContainer, Icon } from "./styled";
// eslint-disable-next-line camelcase
import { GetRepos_search_edges_node_Repository } from "../../apollo/client/__generated__/GetRepos";

const Repo = ({
  homepageUrl,
  name,
  description,
  url,
  stargazers,
  watchers
}: // eslint-disable-next-line camelcase
GetRepos_search_edges_node_Repository) => (
  <StyledRepo>
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
      <p>{description || ""}</p>
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

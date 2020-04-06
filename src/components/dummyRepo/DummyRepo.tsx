import React, { CSSProperties } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { StyledRepo, Text, IconContainer, Icon } from "../repo/styled";

const DummyRepo = ({ style }: { style: CSSProperties }) => (
  <SkeletonTheme color="silver">
    <StyledRepo style={style} role="listitem">
      <Text>
        <h3>
          <Skeleton />
        </h3>
        <p>
          <Skeleton count={3} />
        </p>
      </Text>
      <IconContainer>
        <Icon>
          <Skeleton circle width={50} height={50} />
          <Skeleton width={50} />
        </Icon>
        <Icon>
          <Skeleton circle width={50} height={50} />
          <Skeleton width={50} />
        </Icon>
        <Icon>
          <Skeleton circle width={50} height={50} />
          <Skeleton width={50} />
        </Icon>
        <Icon>
          <Skeleton circle width={50} height={50} />
          <Skeleton width={50} />
        </Icon>
      </IconContainer>
    </StyledRepo>
  </SkeletonTheme>
);

export default DummyRepo;

import React from "react";
import { CSSTransition } from "react-transition-group";
import Loader from "react-loader-spinner";
import Wrapper from "./styled";

const Spinner = ({ loading }: { loading: boolean }) => (
  <CSSTransition in={loading} timeout={300} mountOnEnter unmountOnExit>
    <Wrapper data-testid="spinner">
      <Loader type="Oval" color="black" height={100} width={100} />
    </Wrapper>
  </CSSTransition>
);

export default Spinner;

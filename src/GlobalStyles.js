import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        Link {
          color: "blue";
        }
      `}
    />
  );
};

export default GlobalStyles;

import React from "react";
import { StyledTextInput } from "./styled";

const TextInput = React.forwardRef((props, ref) => {
  const { onChange, ...rest } = props;

  const inputRef = React.useRef(null);

  return (
    <StyledTextInput ref={ref}>
      <input
        ref={inputRef}
        type="text"
        onChange={onChange ? e => onChange(e.target.value) : undefined}
        {...rest}
      />
    </StyledTextInput>
  );
});

export default TextInput;

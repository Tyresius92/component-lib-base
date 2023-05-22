import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

export interface TextInputProps {
  id?: string;
  label: string;
  errorMessage?: string;
  value: string;
  onValueChange: (value: string) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const StyledWrapper = styled.div``;

const StyledLabel = styled.label`
  font-weight: var(--font-weight-bold);
`;

const StyledInput = styled.input<{
  hasStartIcon: boolean;
  hasEndIcon: boolean;
}>`
  width: 100%;
  padding: var(--space-2);

  ${(props) => props.hasStartIcon && `padding-inline-start: 2rem;`}
  ${(props) => props.hasEndIcon && `padding-inline-end: 2rem;`}
`;

const StartIconSlot = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

const EndIconSlot = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

const ClearButton = styled.button<{ hasEndIcon: boolean }>`
  position: absolute;
  top: 50%;
  left: auto;
  right: ${(props) => (props.hasEndIcon ? "calc(1.5rem + 8px)" : "auto")};
  transform: translateY(-50%);
`;

export const TextInput = ({
  id,
  label,
  errorMessage,
  value,
  onValueChange,
  startIcon,
  endIcon,
}: TextInputProps): JSX.Element => {
  const [inputId] = useState(
    id ?? `text-input-${label.toLowerCase().replace(/ /g, "-")}`
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleClearClick = () => {
    onValueChange("");
  };

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={inputId}>
        <span>{label}</span>
        <div style={{ position: "relative" }}>
          {startIcon && <StartIconSlot>{startIcon}</StartIconSlot>}
          <StyledInput
            type="text"
            id={inputId}
            aria-invalid={!!errorMessage}
            aria-describedby={`${inputId}-error`}
            value={value}
            onChange={handleChange}
            hasStartIcon={!!startIcon}
            hasEndIcon={!!endIcon}
          />
          {value && (
            <ClearButton
              type="button"
              onClick={handleClearClick}
              aria-label="Clear"
              hasEndIcon={!!endIcon}
            >
              X
            </ClearButton>
          )}
          {endIcon && <EndIconSlot>{endIcon}</EndIconSlot>}
        </div>
      </StyledLabel>
      {errorMessage && (
        <div role="alert" id={`${inputId}-error`}>
          {errorMessage}
        </div>
      )}
    </StyledWrapper>
  );
};

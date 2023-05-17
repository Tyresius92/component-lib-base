import React, { createContext, useContext } from "react";
import styled from "styled-components";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "style" | "className"> {
  children: React.ReactNode;
  italic?: boolean;
  bold?: boolean;
  color?: "danger" | "default";
}

export const BaseText = styled.p<TextProps>`
  &&&&& {
    font-size: var(--font-size-0);
    font-weight: var(--font-weight-normal);
    color: var(--color-black);
  }
`;

const ItalicText = styled.em<TextProps>`
  &&&&& {
  }
`;

const BoldText = styled.strong<TextProps>`
  &&&&& {
    font-weight: var(--font-weight-bold);
  }
`;

const ColoredText = styled.span<TextProps>`
  &&&&& {
    color: ${(props) =>
      props.color === "danger" ? "var(--color-red-700)" : "inherit"};
  }
`;

const TextContext = createContext(true);

export const Text = (props: TextProps): JSX.Element => {
  const isTopLevel = useContext(TextContext);

  if (isTopLevel) {
    return (
      <TextContext.Provider value={false}>
        <BaseText>
          <Text {...props}>{props.children}</Text>
        </BaseText>
      </TextContext.Provider>
    );
  }

  if (props.italic) {
    const { italic: _removed, ...rest } = props;
    return (
      <ItalicText>
        <Text {...rest}>{props.children}</Text>
      </ItalicText>
    );
  }

  if (props.bold) {
    const { bold: _removed, ...rest } = props;
    return (
      <BoldText>
        <Text {...rest}>{props.children}</Text>
      </BoldText>
    );
  }

  if (props.color) {
    const { color, ...rest } = props;
    return (
      <ColoredText color={color}>
        <Text {...rest}>{props.children}</Text>
      </ColoredText>
    );
  }

  return <>{props.children}</>;
};

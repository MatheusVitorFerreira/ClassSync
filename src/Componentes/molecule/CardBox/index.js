import React from "react";
import { CardBox, IconWrapper, InfoWrapper, Title, Value } from "./styles";

function InfoCard({ title, value, icon, color }) {
  return (
    <CardBox color={color}>
      <IconWrapper color={color}>{icon}</IconWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </InfoWrapper>
    </CardBox>
  );
}

export default InfoCard;

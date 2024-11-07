import { h, ComponentChildren } from 'preact';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 4em 0;
  text-align: center;
  color: #333;
`;

const Title = styled.h2`
  margin-bottom: 1em;
  font-size: 2em;
  color: #333;
`;

interface SectionProps {
  title: string;
  children: ComponentChildren;
  id: string;
}

export const Section = ({ title, children, id }: SectionProps) => (
  <SectionContainer id={id}>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);

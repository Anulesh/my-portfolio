import { h } from 'preact';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2em 0;
`;

const Name = styled.h1`
  font-size: 2.5em;
  color: #222;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #666;
  margin-top: 0.5em;
`;

const Separator = styled.div`
  margin-top: 1em;
  img {
    width: 100px;
    height: auto;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <Name aria-label="Lucas Bebber">
      <span class="c" aria-hidden="true">Lucas </span>
      <span class="b" aria-hidden="true">Bebber</span>
    </Name>
    <Title aria-label="Creative Developer">
      <span class="c" aria-hidden="true">Creative </span>
      <span class="b" aria-hidden="true">Developer</span>
    </Title>
    <Separator class="a js-Lazyload" role="presentation">
      <img src="img/separator-green.svg" alt="Separator" role="presentation" />
    </Separator>
  </HeaderContainer>
);

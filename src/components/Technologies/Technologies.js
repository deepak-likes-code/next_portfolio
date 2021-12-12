import React from 'react';
import { DiBackbone, DiFirebase, DiGhost, DiReact } from 'react-icons/di';
import { SiHiveBlockchain } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on a range of technologies in web development, machine learning and Web 3 space.
      </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJS and SQL and No-SQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBackbone size="3rem" />
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, Web3js and EtherJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;

import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentsData } from '../../constants/constants';



const Acomplishments = () => (
  <Section >
    <SectionTitle>
      Personal Achievements
    </SectionTitle>
    <Boxes>
      {AcomplishmentsData.map(({ number, text }) => (
        <Box key={number}>
          <BoxNum>{number}+</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main title>

        Welcome to <br />
      Deepak's Crib
      </SectionTitle>
      <SectionText>
        This is my display of my amazing work
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/deepak-codes/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
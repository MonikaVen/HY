import React from 'react';
import classes from './Sections.module.css';
import { Section, Columns, Card, Heading, Media, Image} from 'react-bulma-components';
import TeamProfile from './TeamProfile.js'
import tina from './graphics/team/tina.jpeg'
import monika from './graphics/team/monika.png'
import prady from './graphics/team/prady.jpeg'
const Team = () => {
    return (
        <Section>
        <div className={classes.sectionTitle}>Team</div>
        <Columns>
        <Columns.Column>
          <TeamProfile image={tina} name="Kristina Dobricic" title="CEO" about="Background in sustainability, previously co-founded two companies and worked with product and business development"/>
        </Columns.Column>
        <Columns.Column>
          <TeamProfile image={monika} name="Monika Venčauskaitė" title="CTO" about="Strong background in data analysis, application development and AI applications. Experience in the cyber security domain."/>
        </Columns.Column>
        <Columns.Column>
          <TeamProfile image={prady} name="Pradyumna Mahanta" title="CPO" about="Telecom and Automotive experience with end to end product development. Recently worked in Self-driving car start-up."/>
        </Columns.Column>
        </Columns>
      </Section>
      
    )
}
export default Team
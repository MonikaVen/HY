import React from 'react'
import { Section, Heading } from 'react-bulma-components';
import classes from './Sections.module.css';

const Vision = () => {
    return (
        <Section className={classes.sectionImage}>
            <div className={classes.sectionTitle}>Our vision:</div>
            <div className={classes.sectionText}>We enable seamless personalized services to the driver of the future.</div>
        </Section>
    )
}

export default Vision
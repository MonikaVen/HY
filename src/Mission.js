import React from 'react'
import { Section } from 'react-bulma-components';
import classes from './Sections.module.css';

const Mission = () => {
    return (
        <Section className={classes.sectionGreen}>
            <div className={classes.sectionTitle}>
                Our Mission
            </div>
            <div className={classes.sectionText}>
                To provide seamless secure car payment and adaptive digital insurance to encourage the transition to autonomous connected vehicles.
            </div>
        </Section>
    )
}

export default Mission
import React from 'react';
import { Section, Columns } from 'react-bulma-components'
import classes from './Sections.module.css';
import { ReactMailchimpEmailSignupForm } from "react-mailchimp-email-signup-form";
import "react-mailchimp-email-signup-form/dist/react-mailchimp-email-signup-form.css";

const Subscribe = () => {
    return (
        <Section className={classes.sectionGreen}>
            <Columns>
            <Columns.Column size={4}>
            </Columns.Column>
            <Columns.Column size={4}>
                <ReactMailchimpEmailSignupForm
                    elementId="first-email-signup-form"
                    url="https://gmail.us19.list-manage.com/subscribe/post?u=63cc6b5e98536ac91d81c0044&id=1e450186e1"
                    title="Interested in finding out more?"
                    subtitle="Subscribe to our newsletter. We take privacy seriously."
                    />
            </Columns.Column>
            <Columns.Column size={4}>
            </Columns.Column>
            </Columns>

        </Section>

    )
}

export default Subscribe

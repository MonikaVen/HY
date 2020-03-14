import React from 'react'
import { Heading, Footer} from 'react-bulma-components';
import classes from './Sections.module.css';
const Contacts = () => {
    return (
        <Footer><div className={classes.sectionTitle}>Contact Us:</div> <br></br>Email: company@gmail.com <br></br>Phone: 0730000000 <br></br>  www.hybridinsurance.com</Footer>
    )
}

export default Contacts

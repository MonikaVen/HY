import React from 'react';
import { Section, Columns, Card, Heading, Media, Image} from 'react-bulma-components';
const TeamProfile = (props) => {
    return (
       
        <Card style={{padding: '0%'}}>
            <div style={{padding: '5%'}}>
            <Media>
            <Media.Item>
            <Image rounded size={256} alt="profile" src={props.image} />
            </Media.Item> 
            <br></br>
            <div style={{padding: '10px'}}>
            <Media.Item>
                <b>{props.name}</b><br></br>
                <b>{props.title}</b><br></br>
                <br></br>
                    {props.about}
            </Media.Item>
            </div>

            </Media>
            </div>
        </Card>
        

    )
}
export default TeamProfile
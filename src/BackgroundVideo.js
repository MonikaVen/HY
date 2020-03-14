import React from 'react'
import classes from './BackgroundVideo.module.css';
import HeroComponent from './Hero.js'


const BackroundVideo = () => {
    const videoSource ="https://cdn.dribbble.com/users/32512/screenshots/8257683/media/b12a11b80b693927a47fc90f9031c863.mp4"
    return (
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={videoSource} type="video/mp4"/>
                Your browser does not support video tag.
            </video>
            <div className={classes.Content}>
                <div className={classes.SubContent}>
                    <HeroComponent/>
                </div>
            </div>
        </div>
    )
}

export default BackroundVideo
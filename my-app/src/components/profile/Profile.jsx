import React from "react";

import {Container} from 'react-bootstrap';
import Bio from "./Bio";
import Skills from "./Skills";
import SocialMedia from "./SocilaMedia";
// import styles from '../../../styles/Home.module.css'

const Profile = () => {
    return (
        <Container>
            <Bio name={"Md. Abu Bakker Siddique"} designation={"Web developer"} description={"Test date for description"}/>
            <Skills/>
            <SocialMedia/>
        </Container>
    )
}
export default Profile;
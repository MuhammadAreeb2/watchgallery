
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from "@mui/material"

import Navbar from "./homeComponent/navbar"
import React, { useEffect, useState } from 'react'

// import { ToastContainer, toast } from 'react-toastify';
const About = () => {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        let email = {
            title,
            content,
            contactEmail
        }

        console.log("sending email", email);
    }

    let [email, setemail] = useState();
    let [pass, setpass] = useState()
    let [btn, setbtn] = useState(true)
    useEffect(() => {
        console.log("1sttym state")
    }, [])


    useEffect(() => {
        console.log("email chnge state")
    }, [email])

    return (
        <>
            <Navbar />
            <Container className='about' >

                <React.Fragment >

                    <form className="contact text-center" onSubmit={sendEmail}>
                        <h2 className="mt-5">Send me a message if you have any  query </h2>

                        <Row className="justify-content-center p-3" lg={6}>
                            <label htmlFor="title">Message Title: </label>
                            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />


                        </Row>

                        <Row className="justify-content-center p-3" lg={6}>
                            <label htmlFor="content">Message Content: </label>
                            <textarea name="content" onChange={(e) => setContent(e.target.value)}  ></textarea>
                        </Row>
                        <Row className="justify-content-center p-3" lg={6}>
                            <label htmlFor="email">Contact Email: </label>
                            <input type="email" name="email" placeholder='Enter email' value={email}
                                onChange={(e) => setemail(e.target.value)} />
                        </Row >

                        <Button type="submit" value="Send Message " className="mt-8" variant="outlined" >
                            Send Message
                        </Button>

                    </form>

                </React.Fragment>
            </Container>
        </>
    )

}





export default About;
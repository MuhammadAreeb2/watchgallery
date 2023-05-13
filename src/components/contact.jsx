
import React from "react";
import { Formik } from "formik";

import Navbar from "./homeComponent/navbar"
import { Container, Row } from "react-bootstrap";
import { Button } from "@mui/material"
const FormikForm = () => {
  return (
    <>
      <Navbar />
      <Container className="text-center">
        <h2 className="mt-2">Send me a message if you have any  query </h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Row className="mt-5">
                <label htmlFor="title">Email </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur} className="mt-8 w-50"
                  style={{ margin: "auto" }}
                  value={values.email}
                /></Row>

              {errors.email && touched.email && errors.email}
              <Row className="mt-5">
                <label htmlFor="title">Password </label>
                <input type="text" name="title" onChange={handleChange}
                  style={{ margin: "auto" }}
                  onBlur={handleBlur} className="mt-8 w-50"
                  value={values.password} />

              </Row>
              {errors.password && touched.password && errors.password}
              <Row className="mt-5">
                <Button type="submit" value="Send Message " className="mt-8 w-50" variant="outlined" disabled={isSubmitting} style={{ margin: "auto" }} >
                  Send Message
                </Button>
              </Row>


            </form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default FormikForm
/* eslint-disable react/prop-types */
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactOps';

function ContactForm() {
  const contactNameFieldId = useId();
  const phoneNumberFieldId = useId();
  const initialValues = {
    contactName: '',
    phoneNumber: '',
  };
  const ValidationSchema = yup.object().shape({
    contactName: yup
      .string()
      .min(3, 'Too short name')
      .max(50, 'Too long name')
      .required('Must be filled in'),
    phoneNumber: yup
      .string()
      .min(9, 'Phone number consists of 9 digits')
      .max(9, 'Phone number consists of 9 digits')
      .required('Must be filled in'),
  });

  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.phoneNumber,
      })
    );

    actions.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={contactNameFieldId}>
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="contactName"
          id={contactNameFieldId}
        />
        <ErrorMessage name="contactName" component="span" />
        <label className={css.label} htmlFor={phoneNumberFieldId}>
          Number
        </label>
        <Field
          className={css.field}
          type="text"
          name="phoneNumber"
          id={phoneNumberFieldId}
        />
        <ErrorMessage name="phoneNumber" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;

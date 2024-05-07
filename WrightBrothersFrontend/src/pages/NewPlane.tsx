import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageContent from '../components/PageContent';

const PlaneSchema = Yup.object().shape({
  id: Yup.number().required('Required'),
  name: Yup.string().required('Required'),
  year: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
  rangeInKm: Yup.number().required('Required'),
});

const NewPlane = () => {
  const navigate = useNavigate();

  return (
    <PageContent>
      <h1>New plane</h1>
      <Formik
        initialValues={{
          id: '',
          name: '',
          year: '',
          description: '',
          rangeInKm: '',
        }}
        validationSchema={PlaneSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:1903/planes', values)
            .then(() => {
              setSubmitting(false);
              navigate('/');
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
              <Field id="id" type="number" name="id" className="mt-1 block w-full" />
              <ErrorMessage name="id" component="div" />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Field id="name" type="text" name="name" className="mt-1 block w-full" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
              <Field id="year" type="number" name="year" className="mt-1 block w-full" />
              <ErrorMessage name="year" component="div" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Field id="description" type="text" name="description" className="mt-1 block w-full" />
              <ErrorMessage name="description" component="div" />
            </div>
            <div>
              <label htmlFor="rangeInKm" className="block text-sm font-medium text-gray-700">Range in Km</label>
              <Field id="rangeInKm" type="number" name="rangeInKm" className="mt-1 block w-full" />
              <ErrorMessage name="rangeInKm" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

export default NewPlane;
import { useEffect, useState } from "react";
import { Button, FormField, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';


export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const {
        createActivity,
        updateActivity,
        loading,
        loadActivity,
        loadingInitial } = activityStore;

    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required(),
        date: Yup.string().required('Date is required').nullable(),
        venue: Yup.string().required(),
        city: Yup.string().required()
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]);

    // function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //     const { name, value } = event.target;
    //     setActivity({ ...activity, [name]: value });
    // }

    // function handleFormSubmit() {
    //     if (!activity.id) {
    //         activity.id = uuid();
    //         createActivity(activity).then(() => navigate(`/activities/${activity.id}`));
    //     } else {
    //         updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
    //     }
    // }

    if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

    return (
        <Segment clearing>
            <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={activity}
                onSubmit={values => console.log(values)}>
                {({ handleSubmit }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                        <FormField>
                            <Field placeholder='Title' name="title" />
                            <ErrorMessage
                                name='title'
                                render={error => <Label basic color='red' content={error} />} />
                        </FormField>
                        <Field placeholder='Description' name="description" />
                        <Field placeholder='Category' name="category" />
                        <Field type="date" placeholder='Date' name="date" />
                        <Field placeholder='City' name="city" />
                        <Field placeholder='Venue' name="venue" />
                        <Button
                            loading={loading}
                            floated='right'
                            positive
                            type='submit'
                            content='Submit' />
                        <Button
                            as={Link} to='/activities'
                            floated='right'
                            type='button'
                            content='Cancel' />
                    </Form>
                )}
            </Formik>            
        </Segment>
    );
});
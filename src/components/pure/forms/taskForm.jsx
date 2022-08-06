import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/level.enum';
import { Task } from '../../../models/task.class';

const Taskform = ({add, length}) => {

    // const nameRef = useRef('');
    // const descriptionRef = useRef('');
    // const levelRef = useRef(LEVELS.NORMAL);

    // function addTask(e){
    //     e.preventDefault();
    //     const newTask = new Task(
    //         values.newTask,
    //         descriptionRef.current.value,
    //         false,
    //         levelRef.current.value
    //     );
    //     add(newTask);
    // }

    // With Formik

    const initialCredentials = {
        newTask: '',
        description: '',
        level: '',
        completed: false
    }

    const taskSchema = Yup.object().shape(
        {
            newTask: Yup.string()
            .required('you need to write a task'),
            description: Yup.string()
            .required('write a description'),
            // level: Yup.string()
            //    .oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],
            //     'Select one of the following options: NORMAL / URGENT / BLOCKING') 
        }
    )


    return (
      <div>
        <Formik
        className='d-flex justify-content-center align-items-center mb-4'
        initialValues={initialCredentials}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            const newTask = new Task(
              values.newTask,
              values.description,
              false,
              values.level[0]
            );
            add(newTask);
          }}
        >
              {({ values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur}) => (
                <Form className='form-outline flex-fill'>
                  <label htmlFor="newTask"></label>
                  <Field id="newTask" type="text" name="newTask" placeholder="Enter your task" />

                  {
                    errors.newTask && touched.newTask && 
                    (
                      <ErrorMessage name="newTask" component='div'/>
                    )
                  }

                  <label htmlFor="description"></label>
                  <Field id="description" type="text" name="description" placeholder="add description" />

                  {
                    errors.description && touched.description && 
                    (
                      <ErrorMessage name="description" component='div'/>
                    )
                  }


                  <div id="checkbox-group">level</div>
                    <div role="group" aria-labelledby="checkbox-group">
                      <label>
                        <Field type="checkbox" name="level" value={LEVELS.NORMAL} />
                        Normal
                      </label>
                      <label>
                        <Field type="checkbox" name="level" value={LEVELS.URGENT} />
                        Urgent
                      </label>
                      <label>
                        <Field type="checkbox" name="level" value={LEVELS.BLOCKING} />
                        Bloking
                      </label>
                  </div>

                  <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add New Task' : 'Create your First Task'}
                  </button>
                </Form>
              )
            
            }
        

        </Formik>
      </div>
    );
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;


{/* <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
<div className='form-outline flex-fill'>
    <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
    <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>
    <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
        <option value={LEVELS.NORMAL}>
            Normal
        </option>
        <option value={LEVELS.URGENT}>
            Urgent
        </option>
        <option value={LEVELS.BLOCKING}>
            Blocking
        </option>
    </select>
    <button type='submit' className='btn btn-success btn-lg ms-2'>
        {length > 0 ? 'Add New Task' : 'Create your First Task'}
    </button>
</div>
</form> */}
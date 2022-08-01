import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';



const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'description1', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'description3', false, LEVELS.BLOCKING)


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)

    // Control del ciclo de vida del componente
    useEffect(() => {
      console.log('Task State has been modified')
      setLoading(false)
      return () => {
        console.log('TaskList component is going to unmount...')
      };
    }, [tasks]);

    const changeCompleted = () => {
      console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div className='col-12'>
              <div className='card'>
                {/* Card Header (title) */}
                <div className='card-header p-3'>
                  <h5>Your Task:</h5>
                </div>
                {/* Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                  <table>
                    <thead>
                      <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                              task={task} 
                              key={index}>
                            </TaskComponent>
                          )
                        }
                      )}

                    </tbody>
                  </table>
                </div>
              </div>
              <TaskForm></TaskForm>
            </div>
        </div>
    );
};

export default TaskListComponent;

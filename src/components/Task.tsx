import React from 'react';
import style from './card.module.css'
import {MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon} from 'mdb-react-ui-kit';
import {changeTasksAC, deleteTasksAC, isCompletedTasksAC, TaskType} from "store/tasksReducer";
import {useDispatch} from "react-redux";

type TaskPropsType = {
    task: TaskType
}

export const Task = ({task}: TaskPropsType) => {

    const {id, avatar, priority, data, isCompleted} = task

    const dispatch = useDispatch()

    const completedTaskHandler = () => {
        dispatch(isCompletedTasksAC(id, true))
        alert('Таска выполнена')
    }
    const isNotCompletedTaskHandler = () => {
        dispatch(isCompletedTasksAC(id, false))
    }

    const changeTaskHandler = () => {
        dispatch(changeTasksAC(id, 'NewTitle'))
        alert('Изменить текст таски')
    }

    const deleteTaskHandler = () => {
        dispatch(deleteTasksAC(id))
        alert('Таска удалена')
    }

    const testFoo = () => {
        console.log('testFoo')
    }




    return (
        <MDBCard className={style.cardWrapper}>
            <MDBCardBody>
                <MDBCardTitle className={style.cardTitle}>
                    <MDBIcon fas icon="ellipsis-v"/>

                    <MDBBadge pill light>{`Задача #${id}`}</MDBBadge>

                    {priority === 'Низкий'
                        ? <MDBBadge pill color='success' light>{priority}</MDBBadge>
                        : priority === 'Средний'
                            ? <MDBBadge pill color='warning' light>{priority}</MDBBadge>
                            : priority === 'Высокий'
                                ? <MDBBadge pill className='mx-2' color='danger' light>{priority}</MDBBadge>
                                : ''
                    }

                </MDBCardTitle>

                <div>
                    <img className={style.avatar} src={avatar} alt=""/>
                </div>

                <MDBCardTitle className={style.data}>{data}</MDBCardTitle>
                <MDBCardText className={style.description}>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>

                <div className={style.lineAndBossName}>
                    <MDBCardTitle className={style.bossName}>Проверяет: Шабардин Максим</MDBCardTitle>
                    <hr/>
                </div>

                <div className={style.buttons}>

                    {isCompleted ?
                        <MDBBtn color='success' tag='a' floating onClick={isNotCompletedTaskHandler}>
                            <MDBIcon fas icon="check"/>
                        </MDBBtn>
                        : <MDBBtn color='info' tag='a' floating onClick={completedTaskHandler}>
                            <MDBIcon fas icon="check"/>
                        </MDBBtn>
                    }

                    <MDBBtn color='warning' tag='a' floating onClick={changeTaskHandler} >
                        <MDBIcon fas icon="pen"/>
                    </MDBBtn>

                    <MDBBtn color='danger' tag='a' floating onClick={deleteTaskHandler} >
                        <MDBIcon fas icon="adjust"/>
                    </MDBBtn>

                </div>

            </MDBCardBody>
        </MDBCard>
    )
}

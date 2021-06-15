import React, { useState, useContext } from 'react';
import { GlobalContext } from 'providers/GlobalContextProvider';
import SortButton from 'components/molecues/SortButton/SortButton';
import TaskListItem from 'components/molecues/TaskListItem/TaskListItem';
import { Wrapper, DropDown, Line, Arrow, Content } from './TaskList.style';

const TaskList = () => {
  const { data, compliteTasks, handleDelete, handleComplite } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <>
      <SortButton />
      <DropDown onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Arrow>{isOpen ? '↓' : '↑'}</Arrow>
        <Content>Tasks ({data.length})</Content>
      </DropDown>
      <Wrapper isOpen={isOpen} height={data.length * 113}>
        {data.map((values) => (
          <TaskListItem
            handleDelete={handleDelete}
            handleComplite={handleComplite}
            values={values}
            key={`${values.nameTask}${Math.random()}`}
          />
        ))}
      </Wrapper>
      <DropDown onClick={() => setIsOpen2(!isOpen2)}>
        <Line />
        <Arrow>{isOpen2 ? '↓' : '↑'}</Arrow>
        <Content>Complite Tasks ({compliteTasks.length})</Content>
      </DropDown>
      <Wrapper isOpen={isOpen2} height={compliteTasks.length * 113}>
        {compliteTasks.map((values) => (
          <TaskListItem values={values} key={`${values.nameTask}${Math.random()}`} compliteTasks />
        ))}
      </Wrapper>
    </>
  );
};

export default TaskList;

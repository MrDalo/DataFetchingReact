import React from 'react';
import Button from './Button';

const Buttons = ({dataState, setDataState}) => {
  return (
    <>
        <Button text={'posts'} dataState={dataState} setDataState={setDataState}/>
        <Button text={'comments'} dataState={dataState} setDataState={setDataState}/>
        <Button text={'todos'} dataState={dataState} setDataState={setDataState}/>
    </>
  )
}

export default Buttons
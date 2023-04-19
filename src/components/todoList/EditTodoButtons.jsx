import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsXLg } from 'react-icons/bs';

const IconMap = {
  edit: BiEdit,
  delete: RiDeleteBin2Line,
  confirm: AiOutlineCheck,
  cancel: BsXLg,
};

const EditTodoButtons = ({ testId, icon, onClick, className }) => {
  const iconEl = React.createElement(IconMap[icon]);
  return (
    <button
      type='button'
      data-testid={testId ? testId : null}
      onClick={onClick}
      className={`ml-2 ${className}`}
    >
      {iconEl}
    </button>
  );
};

export default EditTodoButtons;

import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import "../css/ToDo.css";
import { TypeToDo } from "../types/type";
import { useDispatch } from "react-redux";
import { editToDo, removeToDo } from "../redux/todoslice";
import { useState } from "react";
interface todoprop {
  todoprop: TypeToDo;
}
function ToDo({ todoprop }: todoprop) {
  const dispatch = useDispatch();
  const [editTable, setEditTable] = useState<boolean>(false);
  const [newToDo, setNewToDo] = useState<string>(todoprop.content);
  const handleEditToDo = () => {
    const payload: TypeToDo = {
      id: todoprop.id,
      content: newToDo,
    };
    dispatch(editToDo(payload));
    setEditTable(false);
  };
  const handleRemoveToDo = () => {
    dispatch(removeToDo(todoprop.id));
  };
  return (
    <div className="tdmaindiv">
      {editTable ? (
        <input
        placeholder="..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewToDo(e.target.value);
          }}
          value={newToDo}
          type="text"
        />
      ) : (
        <div className="content">{todoprop.content} </div>
      )}

      <div className="icons">
        <CiCircleRemove onClick={handleRemoveToDo} className:String="icon" />
        {editTable ? (
          <CiCircleCheck onClick={handleEditToDo} className="icon" />
        ) : (
          <CiEdit onClick={() => setEditTable(true)} className="icon" />
        )}
      </div>
    </div>
  );
}

export default ToDo;

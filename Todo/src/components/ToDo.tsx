import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import '../css/ToDo.css'
function ToDo() {
  return (
    <div className="tdmaindiv">
        <div className='content'>
            contend
        </div>
        <div className="icons">
          <CiCircleRemove className='icon'/>
          <CiEdit className='icon'/>
        </div>
    </div>
  )
}

export default ToDo
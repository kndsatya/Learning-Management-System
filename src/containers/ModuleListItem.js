import React from 'react'
import './CourseEditor.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt,faPencilAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt,faPencilAlt)

const ModuleListItem = ({module,deleteModule,editModule,selectModule,selectedModule}) =>

    <li className={module===selectedModule?"list-group-item wbdv-module wbdv-label-text active" :"list-group-item wbdv-module wbdv-label-text"}
        onClick={()=>selectModule(module)} key={module.id}>{module.title}

        <a href="#" onClick={() => editModule(module)}><FontAwesomeIcon icon="pencil-alt" className="float-right"/></a>
        <a href="#" onClick={() => deleteModule(module)}><FontAwesomeIcon icon="trash-alt" className="float-right"/></a>
    </li>

export default ModuleListItem
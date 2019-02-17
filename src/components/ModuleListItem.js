import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt,faPencilAlt} from '@fortawesome/free-solid-svg-icons'


library.add(faTrashAlt,faPencilAlt)


const ModuleListItem = ({module,deleteModule,editModule,selectModule,selectedModule}) => {

   const moduleStyle={
       backgroundColor:"#666"
   }
   const activeStyle={
   }


    return(<li className={JSON.stringify(module) === JSON.stringify(selectedModule) ? "list-group-item wbdv-label-text wbdv-module  active"
                                             :
                   "list-group-item  wbdv-label-text wbdv-module"} style={
        JSON.stringify(module) === JSON.stringify(selectedModule) ?activeStyle:moduleStyle
    }
        onClick={() => selectModule(module)} key={module.id}
      >{module.moduleName}


        <a role="btn" onClick={() => editModule(module)}><FontAwesomeIcon icon="pencil-alt"
                                                                        className="wbdv-button float-right"/></a>
        <a  role="btn" onClick={() => deleteModule(module.id)}><FontAwesomeIcon icon="trash-alt"
                                                                          className="wbdv-button float-right"/></a>
    </li>)
}

export default ModuleListItem
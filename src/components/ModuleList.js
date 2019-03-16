import React from 'react'
import '../containers/CourseEditor.css'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {

    constructor(props){
        super(props);
    }


    getListItems() {


            return (this.props.modules.map((module) =>{
                                               return(<ModuleListItem module={module} key={module.id}
                                                               deleteModule={this.props.deleteModule}
                                                               editModule={this.props.editModule}
                                                               selectModule={this.props.selectModule}
                                                               selectedModule={this.props.selectedModule}/>)})
    )
    }


    render(){

        let inputBox;

        if(this.props.shouldEdit){

            inputBox = <li className="input-group wbdv-module">
                <input type="text" id="module-input" placeholder="New Module" className="form-control"/>
                <button className="btn btn-success input-group-append"
                        onClick={this.props.updateModule}>SAVE</button>
            </li>
        } else {
            inputBox = <li className="input-group wbdv-module">
                <input type="text" id="module-input" className="form-control"/>
                <button className="btn btn-success input-group-append" placeholder="New Module"
                        onClick={this.props.createModule}>CREATE
                </button>
            </li>
        }

        return(
             <ul className="list-group wbdv-column-nav-pills">
                 {inputBox}
                 {this.getListItems()}
             </ul>
        );
    }
}

export default ModuleList;
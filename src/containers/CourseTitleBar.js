import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './CourseTable.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGripHorizontal, faFileAlt,faThList} from '@fortawesome/free-solid-svg-icons'
import './CourseTable.css';
import {Link} from 'react-router-dom'

library.add(faGripHorizontal, faFileAlt,faThList)


 const CourseTitleBar = ({layout}) => {

        let layoutIcon;


        if(layout==="List") {
            layoutIcon =
                    <div className="col-2 d-none d-md-block">
                        <Link to="/grid">
                          <FontAwesomeIcon icon="grip-horizontal" className="float-md-right"/>
                        </Link>
                  </div>
        }else{
            layoutIcon =
                    <div className="col-2 d-none d-md-block">
                <Link to="/table">
                <FontAwesomeIcon icon="th-list" className="float-md-right"/>
                </Link>
            </div>
        }

        return(<div>

            <div className="container header">

                <div className="row">
                    <div className="col-6">
                        Title
                    </div>
                    <div className="col-2 d-none d-md-block">
                        Owned By
                    </div>
                    <div className="col-2 d-none d-md-block">
                        Last Modified
                    </div>


                    {layoutIcon}

                </div>
            </div>

        </div>);

    }

export default CourseTitleBar;
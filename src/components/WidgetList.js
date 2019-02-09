import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget,moveUp,moveDown,preview,togglePreview,
                        save}) =>

    <div>

        <div>
            <div className="saveNpreview form-group row">
                <button className="btn btn-success mr-sm-4 save" id="save"
                  onClick={()=>save()}>Save
                </button>
                &nbsp;
                <h3>Preview &nbsp;</h3>{preview?<i className="fa fa-toggle-on fa-2x preview" onClick={()=>togglePreview()}></i>:<i
                className="fa fa-toggle-off fa-2x preview"onClick={()=>togglePreview()}></i>}
            </div>
        </div>
        <br/>
        <br/>
        <br/>

        <div>
            {
                widgets.map((widget,index,widgets) =>{

                                return(<WidgetComponent
                                    key={widget.id}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}
                                    index={index}
                                    size={widgets.length}
                                   moveUp={moveUp}
                                   moveDown={moveDown}
                                   preview={preview}/>)}
                )
            }
        </div>


        <div>
                    <span className="fa-stack fa-2x float-right wbdv-add-square" onClick={()=>addWidget()}>
	                    <i className="fa fa-square fa-stack-2x"></i>
	                    <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
        </div>

    </div>

export default WidgetList